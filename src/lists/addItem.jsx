import { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddItem = ()=>{

    let params = useParams();
    let id = params.id;

    const [newItem, setNewItem] = useState ({
        name: '',
        //list: '',
        //user:''
    })


    const createItem = async (newItem) =>{
        try{
            const addedItem = await fetch (`http://localhost:3001/lists/${id}/add`, {
                method: "PUT",
                body: JSON.stringify({
                    name: newItem.name,
                    //list: newItem.list,
                    //user: ''
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedItem = await addedItem.json();
            console.log(parsedItem)
        }catch(err){
            console.log(err)
        }
    }

    const inputChange = (e)=>{
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value,
        })
    }

    const submitAdd = async(e)=>{
        e.preventDefault();
        createItem(newItem);
    }
    return(
        <div>
            <h3>Oi, add items to any list here</h3>
            <form onSubmit={submitAdd}>
            <div className="form-row">
                    <label htmlFor="name"> Item: </label>
                    <input onChange ={inputChange} type="text" name="name" value={newItem.name}></input>
                    
                </div>

                {/* <div className="form-row">
                    <label htmlFor="list"> List: </label>
                    <input onChange ={inputChange} type="text" name="list" value={newItem.list}></input>
                    
                </div> */}
                <button type="submit">add item</button>
            </form>
        </div>
    )
}

export default AddItem;
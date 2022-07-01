import { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddItem = ()=>{

    let params = useParams();
    let id = params.id;

    const [newItem, setNewItem] = useState('')


    const createItem = async (addItem) =>{
        try{
            const addItemToList = await fetch (`http://localhost:3001/lists/${id}/add`, {
                method: "PUT",
                body: JSON.stringify(
                     addItem
                    //list: newItem.list,
                    //user: ''
                ),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedItem = await addItemToList.json();
            console.log(parsedItem)
        }catch(err){
            console.log(err)
        }
    }

    const inputChange = (e)=>{
        console.log(e.target.name.value)
        setNewItem(e.target.name = e.target.value)
    }

    const submitAdd = async(e)=>{
        e.preventDefault();
        createItem(newItem);
    }
    return(
        <div>
            <h3>Oi, add items to your list here</h3>
            <form onSubmit={submitAdd}>
            <div className="form-row">
                    <label htmlFor="name"> Item: </label>
                    <input onChange ={inputChange} type="text" name="name" value={newItem}></input>
                    
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
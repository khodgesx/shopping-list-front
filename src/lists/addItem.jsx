import { useState } from 'react'

const AddItem = ()=>{

    const [newItem, setNewItem] = useState ({
        item: '',
        list: ''
    })



    const inputChange = (e)=>{
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value,
        })
    }
    return(
        <div>
            <h3>Oi, add items to any list here</h3>
            <form>
            <div className="form-row">
                    <label htmlFor="name"> Item: </label>
                    <input onChange ={inputChange} type="text" name="name" value={newItem.name}></input>
                </div>
            </form>
        </div>
    )
}

export default AddItem;
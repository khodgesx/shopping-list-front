import { useState } from 'react'
import Lists from './lists'

const NewList = (props)=>{

    const [newList, setNewList] = useState ({
        title: '',
        category: '',
        items: []
    })
   

    const createList = async(newList) =>{
        try{
            const createResponse = await fetch('http://localhost:3001', {
                method: "POST",
                body: JSON.stringify({
                    title: newList.title,
                    items: [],
                    user: 'current user'
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await createResponse.json()
            console.log(parsedResponse)
            if(parsedResponse.success){
                props.setLists(newList, ...props.lists)
            }else{
                console.log(parsedResponse.data)
            }
        }catch (err){
            console.log(err)
        }
    }

    const inputChange = (e)=>{
        setNewList({
            ...newList,
            [e.target.name]: e.target.value,
        })
    }
    return(
        <div>
            <h3>Oi, make a list here</h3>
            <form>
            <div className="form-row">
                    <label htmlFor="list title"> List Title: </label>
                    <input onChange ={inputChange} type="text" name="title" value={newList.title}></input>
            </div>
            <div className="form-row">
                <label htmlFor="category"> Category: </label>
                <input onChange ={inputChange} type="text" name="category" value={newList.category}></input>
            </div>
            </form>
        </div>
    )
}

export default NewList;
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewList = (props)=>{

    const [newList, setNewList] = useState ({
        title: '',
        category: '',
        items: [],
        user:''
    })

    let navigate = useNavigate()
   

    const createList = async(newList) =>{
        try{
            const createResponse = await fetch('http://localhost:3001/lists', {
                method: "POST",
                body: JSON.stringify({
                    title: newList.title,
                    category: newList.category,
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
               // props.setLists(newList, ...props.lists)
               console.log(parsedResponse.data)
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

    const submitNewList = async (e)=>{
        e.preventDefault();
        createList(newList);
        navigate('/lists')
    }
    return(
        <div>
            <h3>Oi, make a list here</h3>
            <form id="new-list-form"onSubmit={submitNewList}>
            <div className="form-row">
                    <label htmlFor="list title"> List Title: </label>
                    <input onChange ={inputChange} type="text" name="title" value={newList.title}></input>
            </div>
            <div className="form-row">
                <label htmlFor="category"> Category: </label>
                <input onChange ={inputChange} type="text" name="category" value={newList.category}></input>
            </div>
            <button id="submit" type="submit">Create List</button>
            </form>
        </div>
    )
}

export default NewList;
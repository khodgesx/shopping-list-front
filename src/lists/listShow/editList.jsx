import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditList = ()=>{
    let navigate = useNavigate();
    let params = useParams();
    let id = params.id

    useEffect(()=>{
        getList();
    }, [])

    const [list, setList] = useState({})
   
    const [items, setItems] = useState([{}])

    const getList = async()=>{
        try{
            
            const currentList = await fetch (`http://localhost:3001/lists/${id}`);
           
            const parsedList = await currentList.json() 
           
            setList(parsedList.data)
            setItems(parsedList.data.items)
            console.log(list)

        }catch(err){
            console.log(err)
        }
    }

    return(
        <h3>edit {list.title}</h3>
    )
}

export default EditList;
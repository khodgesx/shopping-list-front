import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ShowList = ()=>{

    useEffect(()=>{
        getList();
    }, [])

    let params = useParams();
    const id = params.id;

    let navigate = useNavigate();


    const [list, setList] = useState({})

    const getList = async()=>{
        try{
            
            const currentList = await fetch (`http://localhost:3001/lists/${id}`);
           
            const parsedList = await currentList.json() //breaking here?
            console.log(parsedList.data)
            setList(parsedList.data)

        }catch(err){
            console.log(err)
        }
    }

    const deleteList = async(list)=>{
       
        try{
            const deleteResponse = await fetch(`http://localhost:3001/lists/${id}`,{
                method:"DELETE"
            })
            // const newList = props.wineCellar.filter((wine)=>wine._id !==(wine))
            //     props.setWineCellar(newList)
                navigate ('/lists')
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Showing {list.title}</h1>
            <h3>category: {list.category}</h3>
            {/* { list.items[0] ? 
            <ul>
                <li>{list.items[0]}</li>
                <li>{list.items[1]}</li>
            </ul>
            : */}
            <p>no list items yet. Add them <Link to={`/additem/${id}`}>here</Link></p>
            {/*  } */}
            <button onClick={deleteList}>Delete List</button>
            
        </div>
    )
}

export default ShowList;
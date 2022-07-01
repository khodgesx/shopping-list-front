import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import NewList from "./newList";

const Lists = ()=>{
    useEffect(()=>{
        // getLists();
    })
    //state of lists - updates with fetch
    const [lists, setLists] = useState([])
    //function to fetch index of lists from database:
    const getLists = async ()=>{
        try{
            const listsResponse = await fetch('http://localhost:3001/lists')
            const parsedLists = await listsResponse.json()
            // console.log(parsedLists.data)
            //const lists = parsedLists.data
            //console.log(lists)
            await setLists(parsedLists.data)
            //await console.log(lists)
        }catch(err){
            console.log(err)
        }
    }

    

    return(
        <div>
           
            <h3>A List of...your lists:</h3>
            <button onClick={getLists}>get lists</button>
            
            <div>

            { lists.map((list)=>{
                return(
                    
                    <div key={list._id}>
                        <Link to={`/list/${list._id}`}><li>{list.title}</li></Link>
                    </div>
                   
                )
            })}
            </div>
           
        </div>
    )
}

export default Lists;
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import NewList from "./newList";

const Lists = ()=>{
    useEffect(()=>{
        getLists();
    }, [])
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
           
            <h3>A List of YOUR Lists:</h3>
            
            <div>

            { lists.map((list)=>{
                return(
                    
                    <div key={list._id}>
                        <Link to={`/list/${list._id}`}><li id='list-of-lists'>{list.title}</li></Link>
                    </div>
                   
                )
            })}
            </div>
           
        </div>
    )
}

export default Lists;
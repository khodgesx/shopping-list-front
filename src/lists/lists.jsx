import {useState, useEffect} from 'react'
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
            console.log(parsedLists.data)
            await setLists([parsedLists.data])
            await console.log(lists)
        }catch(err){
            console.log(err)
        }
    }

    

    return(
        <div>
           
            <h3>A List of...your lists:</h3>
            <button onClick={getLists}>get lists</button>
            {lists.title ? 
            <div>

            { lists.map((list)=>{
                return(
                    <div>
                        <li>{list.title}</li>
                    </div>
                )
            })}
            </div>
            :
            <p>no lists yet!</p>
            }
            <NewList lists = {lists} setLists={setLists}/>
        </div>
    )
}

export default Lists;
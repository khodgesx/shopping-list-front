import {useState} from 'react'
import NewList from "./newList";

const Lists = ()=>{
    //function to fetch index of lists from database
    //state of lists - updates with fetch
    const [lists, setLists] = useState([])
    return(
        <div>
            <h3>A List of...your lists:</h3>
            <ul>

            </ul>
            <NewList lists = {lists} setLists={setLists}/>
        </div>
    )
}

export default Lists;
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
            await setLists(parsedLists.data)
        }catch(err){
            console.log(err)
        }
    }

    //search lists for specific list:
    const [results, setResults] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const searchLists = (searchValue)=>{
        setSearchInput(searchValue)
        if(searchInput !== ''){
            const filtered = lists.filter((list)=>{
                return Object.values(list).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setResults(filtered)
        }else{
            setResults(lists)
        }
    }
    

    return(
        <div>
           
                
           
       
            <h3>A List of YOUR Lists:</h3>
            
            <div id="list-of-lists-div">

            { lists.map((list)=>{
                return(
                    
                    <div key={list._id}>
                        <Link to={`/list/${list._id}`}><li id='list-of-lists'>{list.title}</li></Link>
                    </div>
                   
                )
            })}
            </div>
           
            <div className="search-div">
            <label htmlFor="search">Search for a list</label>
                <input type="search" id="search" placeholder="search list name" value={searchInput} 
                onChange={(e)=>searchLists(e.target.value)}></input>
                <button>Search</button>
            </div>
            <div id="search-lists-results">
                {results.map((list)=>{
                    
                    return(
                        <div id="list-search" key={list._id}>
                            <Link to={`/list/${list._id}`}><li id='list-of-lists'>{list.title}</li></Link>
                        </div>
                    )
                })}
            </div>
           
        </div>
    )
}

export default Lists;
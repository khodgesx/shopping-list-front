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
   
   const [items, setItems] = useState([{}])

    const getList = async()=>{
        try{
            
            const currentList = await fetch (`http://localhost:3001/lists/${id}`);
           
            const parsedList = await currentList.json() 
           
            setList(parsedList.data)
            setItems(parsedList.data.items)

        }catch(err){
            console.log(err)
        }
    }

    const updateList = (e)=>{
        //if list item is checked then delete that item
        //filter?
        console.log(items)
        { items.map ((item)=>{
         
               console.log(item.name)
               console.log(e)
        
        })}

    }

    const editList = async()=>{
        try{
           
            
        }catch(err){
            console.log(err)
        }
    }

    const deleteList = async(list)=>{
       
        try{
            await fetch(`http://localhost:3001/lists/${id}`,{
                method:"DELETE"
            })
                navigate ('/lists')
        }catch(err){
            console.log(err)
        }
    }
 

    return(
        <div>
            <h1>{list.title}</h1>
            <h3>category: {list.category}</h3>
            
                { items.length === 0 ? 
                <section>
                    <p>no list items yet. Add them <Link to={`/additem/${id}`}>here</Link></p>
                </section>
                :
                <section id="items-listed">
                    { items.map ((item)=>{
                        return(
                            <li key={item._id}>{item.name} <input value ="item.name"type="checkbox"></input></li>
                        )
                    })}
                    <div id="edit-links">
                        <Link to={`/list/edit/${id}`}>Edit</Link>
                        <button onClick={updateList}id='refresh-list'>Update List</button>
                        <p><Link to={`/additem/${id}`}>add another item</Link></p>
                    </div>
                     
                </section>
                }
                
            <button onClick={deleteList}>Delete List</button>
            
        </div>
    )
}

export default ShowList;
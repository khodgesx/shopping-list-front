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
                <section>
                    { items.map ((item)=>{
                        return(
                            <li>{item.name}</li>
                        )
                    })}
                    <p><Link to={`/additem/${id}`}>add another item</Link></p>
                </section>
                }
                
            <button onClick={deleteList}>Delete List</button>
            
        </div>
    )
}

export default ShowList;
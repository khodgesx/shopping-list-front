import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ShowList = ()=>{

    useEffect(()=>{
        //getList();
        getAndList();
    }, [])

    let params = useParams();
    const id = params.id;

    let navigate = useNavigate();


    const [list, setList] = useState({})

    const getAndList = async()=>{
        await getList();
    }

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
                navigate ('/lists')
        }catch(err){
            console.log(err)
        }
    }
 

    return(
        <div>
            <h1>{list.title}</h1>
            <h3>category: {list.category}</h3>
            <p>no list items yet. Add them <Link to={`/additem/${id}`}>here</Link></p>
                {/* { list.items.length === 0 ? 
                <section>
                    <p>no list items yet. Add them <Link to={`/additem/${id}`}>here</Link></p>
                </section>
                :
                <section>
                    { list.items.map ((item)=>{
                        <li key = {item}>{item}</li>
                    })}
                </section>
                } */}
            <button onClick={deleteList}>Delete List</button>
            
        </div>
    )
}

export default ShowList;
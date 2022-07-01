import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ShowList = ()=>{

    useEffect(()=>{
        getList();
    }, [])

    let params = useParams();
    const id = params.id;

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

    return(
        <div>
            <h1>Showing {list.title}</h1>
            <h3>category: {list.category}</h3>
            { list.items[0] ? <ul>
                <li>{list.items[0]}</li>
                <li>{list.items[1]}</li>
            </ul>
            :
            <p>no list items yet. Add them <Link to={'/additem'}>here</Link></p>
            }
            
        </div>
    )
}

export default ShowList;
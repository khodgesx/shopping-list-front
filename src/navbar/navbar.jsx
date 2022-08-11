import { useNavigate, Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <div>
            <ul className="links">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/lists'}>Lists</Link></li>
                <li><Link to={'/newlist'}>New List</Link></li>
            </ul>
        </div>
        
    )
}

export default NavBar;
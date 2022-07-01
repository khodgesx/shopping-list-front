import { useNavigate, Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <div>
            <ul className="links">
                <li><Link to={'/'}>Home</Link></li>
            </ul>
        </div>
        
    )
}

export default NavBar;
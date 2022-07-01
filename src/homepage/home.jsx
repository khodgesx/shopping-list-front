import '../App.css'
import {useNavigate, Link} from 'react-router-dom'
//import emoji from '../images/gasses-emoji.jpeg'

const Home = () =>{
    let navigate = useNavigate();

    return(
        <div className="App">
            <h1>List Baby</h1>
            <p>Love a good list? Keep track of all your lists here
            {/* <img id="glasses-emoji"src={emoji} alt="glasses emoji" /> */}
               
            </p>
            
            <div>
                <ul className="links">
                    <li><Link to={'/lists'}>Lists</Link></li>
                    <li><Link to={'/newlist'}>New List</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home;


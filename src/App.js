import {BrowserRouter, Routes, Route, Navigate, Link} from 'react-router-dom'
import './App.css';
import Home from './homepage/home'
import Lists from './lists/lists';
import NewList from './lists/newList';
import NavBar from './navbar/navbar';
import ShowList from './lists/listShow/showlist';
import AddItem from './lists/addItem';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={ <Home/>} />
            <Route exact path="/lists" element={ <Lists/>} />
            <Route exact path="/newlist" element={ <NewList/>} />
            <Route exact path="/list/:id" element={ <ShowList/>} />
            <Route exact path="/additem" element={ <AddItem/>} />
          </Routes>
       
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route,Switch } from 'react-router-dom';
import homeScreen from './Screens/homeScreen';
import productScreen from './Screens/productScreen';

function App() {
  function openMenu(){
    document.querySelector(".aside").classList.add("open");
 }
 function closeMenu(){
     document.querySelector(".aside").classList.remove("open");
  }
  return (
    <BrowserRouter> 
    <div className="grid-container">
        <header className="header">
            <div className= "brand">
             <button className="menu-button" onClick={openMenu}>
            &#9776;
            </button>
               
                <Link to="/everthing.com/">EveryThing</Link>
            </div>
            <div className= "join-link">
             <a href = "#" >Join in/ Login</a>
             <a href="#">&#128722;</a>
             </div>
        </header>
        <aside className="aside">
            <h4>Shopping List</h4>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li>
                  <a href="#"><h4>Pants</h4> </a>
                </li>
                <li>
                   <a href="#"><h4>Shirts </h4></a> 
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
            <Switch>
           <Route extact path="/everything.com/home" component={homeScreen}/>
           <Route path="/everything.com/product/:id" component={productScreen}/>
           </Switch>
                </div>

        </main>
        <footer className= "footer">
        <h4>All Rights Reserved</h4>
        </footer>
        
    </div>
    </BrowserRouter>
  );
}

export default App;

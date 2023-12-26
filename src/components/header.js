import React from 'react'


const Header= ()=>{
    return (
         <div id = "header">
          <div id="logo">
           <h1>DUNAGIRI</h1>
          </div>
          <nav id ="nav"> 
          <li><a href='/'>About Us</a></li>
          <li><a href='/'>Accomodation</a></li>
          <li><a href='/'>Retreats</a></li>
          <li><a href='/'>Activies</a></li>
          <li><a href='/'>Contact Us</a></li>
          </nav>
           
         <div id="btn">
           <button type="button">Login</button>
           </div>
         </div>

    );
}

export default Header;
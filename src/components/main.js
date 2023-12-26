import React from 'react'


const Main = ()=>{
    return (
         <div id = "main">
           <div id = "col1">
            <h2> Travel Now </h2>
            <p> In Here,Experience serenity and divinity steps away from Mahavatar Babaji's Cave in the Himalayas. </p>
            <p> travel,book,accomodate now for feel warmth, bliss, solitude, and delicious food!" </p>
            <button type='button'> More </button>
           </div>

           <div id = "col">
           <div className= "card card1"></div>
           <div className= "card card2"></div>
           <div className = "card card3"></div>
           <div className = "card card4"></div>
           </div>
         </div>
    );
}

export default Main;
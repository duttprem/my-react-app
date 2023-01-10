import React, {useState}  from "react";

import Expanses from "./Components/Expanses/Expances" 

import NewExpanses from "./Components/NewExpanses/NewExpanses";

let DUMMY_EXPANSE = [
    {
        id : "e1",
        title : "Room Rent",
        amount : 7000,
        date : new Date(2022,10,5)
    }
    
    ];

const  App = (  ) =>{
    
     const [expenses,  setExpanse] = useState(DUMMY_EXPANSE);

     fetch(" ").then(
        response =>{
            return response.json( );
        }
    
     ).then(
        data =>{
            console.log(data);
        }

     );
    
const AddExpansHandler = (expanse) =>{
    const updatedExpanses = [expanse,...expenses]
    setExpanse(updatedExpanses);
};

   return (

   <div >
    <h1>Expense Tracker !</h1>
    <NewExpanses onAddExpans ={AddExpansHandler}/>
    <Expanses  item ={expenses}/>
    </div> 
   ) 
}
export default App;
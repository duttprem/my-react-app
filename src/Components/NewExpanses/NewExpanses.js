import React from "react";


import ExpansesForm from "./ExpansesForm";

import  "./NewExpanses.css";

const NewExpanses = (props ) =>{

    const saveExpanseDataHandler = (ReceiveExpanseData ) =>{
        const expansData = {
            ...ReceiveExpanseData,
            id : Math.random( ).toString()
        }
        props.onAddExpans(expansData);
        console.log(expansData);
    };
    return ( 
        <div className="new-expanse">
            <ExpansesForm onSaveExpanseData ={saveExpanseDataHandler}/>
        </div>
    );

}

export default NewExpanses;
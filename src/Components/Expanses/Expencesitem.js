import React, {  useState } from "react";

import "./Expencesitem.css";

import ExpanceDate from "./ExpanceDate";

import Card from "../UI/Card";

const Expencesitem = (props) =>{
    
    
    return(
            <Card className="container">
                <ExpanceDate date={props.date}/>
            <div className="insurance">
                <h2>{ props.title }</h2>
                <div className="expance">${props.amount}</div>
            </div>
        </Card>
    );

}
export default Expencesitem;
import React from "react";
import Card from "../UI/Card";

import "./Expances.css";

import Expencesitem from "./Expencesitem";



const Expance = (props) =>{
    return(
        <Card className="expenses">
            {
                props.item.map(
                    expanse=>(
                        <Expencesitem
                       date = {expanse.date} 
                       title = {expanse.title} 
                        amount ={expanse.amount} />

                    )
                )
            }
          </Card>
    );

}
export default Expance;
import React from "react";

import "./ExpanceDate.css";

const ExpanceDate =(props ) =>{
    const year = props.date.toLocaleString("en-US", {month: "long"});
    const month = props.date.getFullYear();
    const day =props.date.toLocaleString("en-US", {day: "2-digit"});

    return(
        <div className="Date">
                    <div className="date_year">{year}</div>
                    <div className="date_month">{month}</div>
                    <div className="date_day">{day}</div>
                </div>
    );

}
export default ExpanceDate;
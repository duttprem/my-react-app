import React,{ useState } from "react";


import "./ExpansesForm.css";


const ExpansesForm = (props) =>{

    const [enteredtitle, setEnterdTitle] = useState(" ");
    const [enteredamount, setEnterdAmount] = useState(" ");
    const [entereddate, setEnterdDate] = useState(" ");

    const titleChangeHandler = (event) =>{ 
        setEnterdTitle(event.target.value);
    };
    const amountChangeHandler = (event) =>{
        setEnterdAmount(event.target.value);
     };
    const dateChangeHandler = (event) =>{
        setEnterdDate(event.target.value);
     };

     const submitHandler = (event ) =>{
        event.preventDefault();

        const expansesData = {
            title : enteredtitle,
            amount : enteredamount,
            date : new Date (entereddate)
        }

        props.onSaveExpanseData(expansesData );
        console.log(expansesData);

        setEnterdTitle(" ");
        setEnterdAmount(" ");
        setEnterdDate(" ");

     };

    return (
        <form onSubmit={submitHandler }>
            <div className="new-expanses__controls">

            <div className="new-expanses__control">
                <label>Title</label>
                <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
            </div>


            <div className="new-expanses__control">
                <label>Amount</label>
                <input type="Number" value={enteredamount} min= '0.01' step='0.01'  onChange={amountChangeHandler}/>
            </div>


            <div className="new-expanses__control">
                <label>Date</label>
                <input type="date" value={entereddate} onChange={dateChangeHandler}/>
            </div>
            </div>

            <div className="new-expanses__actions">

            <button type="submit">Add Expanses</button>

            </div>
        </form>
    );

}

export default ExpansesForm;
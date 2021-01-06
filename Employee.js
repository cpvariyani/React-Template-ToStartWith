import React from 'react';
import './Employee.css';

const employee = (props) => {
    return (
            <div className="Employee">
                <p> I am <b>{props.name}</b> CodingLocker Employee, </p>
                <p><b>{props.exp}</b> years of experience. </p>
                {/* <input type="text" onChange={props.mychange}
                value ={props.name}></input> */}
                <button onClick={props.myclick}> Delete Me!</button>
            </div>
    )
}

export default employee;
import React from 'react';
import Employee from '../Employees/Employee/Employee'

const employees = (props) => props.employeesArr.map((emp, index) => {
    return <Employee
        myclick= {(event) => props.myclick(event, index)}
        name={emp.name}
        exp={emp.exp}
        key={emp.id}
      /> });
     
export default employees


import React from "react";

const home = (props) => {
  return (
    <div>
      <h1>ReactJS :Dynamic Styling</h1>
      <div>
        <button onClick={props.myToggleClick}>Show/Hide Employee</button>
      </div>
    </div>
  );
};

export default home;

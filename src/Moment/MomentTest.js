import React from "react";
import moment from "moment/moment";

const MomentTest = () => {

  // const singapurTime = moment().add("3:00:00", 'time').calendar(); 
  const singapurTime = moment().add("3:00:00", 'time').format('h:mm:ss a'); 

  return (
    <div>
      <h1>Singapur Time</h1>
      <p>This time is Singapur Local Time By using moment.js library</p>
      <h3>{singapurTime}</h3>
    </div>
  );
};

export default MomentTest;

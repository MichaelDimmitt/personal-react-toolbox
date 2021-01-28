import React, { useState, useEffect } from "react" //, { useState } from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

// Uncomment to test errors.
// throw new Error('I crashed!');
  
const Home = () => {
  const [triggerError, setTriggerError] = useState(false)

  const handleClick = () => {
    setTriggerError(true)
  }
  useEffect(() => {
    if(triggerError){
      throw new Error('I crashed!');
    }
    else {
      console.log('no error here')
    }
  });
  return (
    <div>
      <h2>
        Home Page, will list the paths of all standard sections of this react application.
      </h2>
      <ul >
      {
        Object.keys(ROUTES).map( (x, index) => 
          <li key={index} id={index}>
            <Link to={ROUTES[x]}>{x}</Link>
          </li>
        )
      }
      </ul>
      <button onClick={handleClick}>
        Create Error
      </button>
    </div>
  );
};
export default Home
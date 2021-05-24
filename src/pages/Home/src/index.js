import React, { useState, useEffect } from "react" //, { useState } from "react";
import * as ROUTES from "./routes";

// Uncomment to test errors.
// throw new Error('I crashed!');
  
function Home() {
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
      </ul>
      <button onClick={handleClick}>
        Create Error
      </button>
    </div>
  );
};
export default Home

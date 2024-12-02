// import React,{useState} from 'react';

// function StudentState() {
//   const [count,setCount] =useState(100);


//   function incremnet()
//   {
//     alert("hi")
//   }
//   return 
//   (
//     <div>
//       <div><h1>{count}</h1></div>;
//       <div>
//         <button onClick={incremnet}>DoIncrement</button>
//       </div>
//     </div>

//   )
  
// }

// export default StudentState

import React, { useState } from 'react';

function StudentState() {
  const [count, setCount] = useState(100);

  function increment() {
    setCount(count+1);
  };
  function decrement() {
    setCount(count-1);
  };

  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={increment}>Do Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Do Decrement</button>
      </div>
    </div>
  );
}

export default StudentState;

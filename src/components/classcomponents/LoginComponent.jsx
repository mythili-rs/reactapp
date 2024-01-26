//COUNTER:
//import { useReducer } from 'react';

// const initialState = { count: 0 };

// // Separate reducer function
// const countFunc = (state, action) => {
//   if (action.type === "ADD") {
//     return { count: state.count + 1 };
//   } else if (action.type === "SUB") {
//     return { count: state.count - 1 };
//   }
//   return state;
// };

// const Login = () => {
//   // useReducer returns the current state and a dispatch function
//   const [state, dispatch] = useReducer(countFunc, initialState);

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: "ADD" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "SUB" })}>Decrement</button>
//     </div>
//   );
//   }

// export default Login;


//ONMOUSEOVER:

// import { useState } from "react" 
// const Login=()=>{
//         const [login,updateexpansion]=useState("Login here")
//         const updatingexp=()=>{
//             // console.log("Hello")
//             updateexpansion("I f you have already registred please login here by entering your credentials")
//         }
//         return(
//             <div>
//                 <h1  onMouseOver={updatingexp}>Kindly {login}</h1>
//                 {/* <a href="mailto:mythilirs.21ece@kongu.edu">mythilirs.21ece@kongu.edu</a> */}
//             </div>
//         )

// }

// export default Login;


import React, { useState } from "react";

const Login = () => {
  const [login, updateLogin] = useState("Login here");

  const redirectToYouTube = () => {
    // Replace 'yourYouTubeChannelUsername' with your actual YouTube channel username
    window.open("http://www.youtube.com/@mythili123", "_blank");
  };

  const updateLoginMessage = () => {
    updateLogin("If you haven't already, subscribe to my YouTube channel for updates!");
    
  };

  return (
    <div>
      <h1 onMouseOver={updateLoginMessage}>{login}</h1>
      <button onClick={redirectToYouTube}>My YouTube Channel</button><b></b>
      <button onClick={redirectToYouTube}>Subscribe My Channel</button>
    </div>
  );
};

export default Login;

  
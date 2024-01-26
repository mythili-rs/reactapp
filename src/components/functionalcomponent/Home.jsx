
// const Home =()=>{
//     return(
//         <div>
//           <h1>  This page is My Home page</h1>
//         </div>
//     )

// }
// export default Home;

// import { useEffect, useState } from "react";

// const About = () => {

//     const [tabName, setTabName] = useState("You are free from cold. Don't take this pill to avoid side effects.");

//     const UpdateTablet = () => {
//        setTabName("Welcome to cold club take this tablet citricin and cure it");
//     }
//     const UpdateTablet1 = () => {
//         setTabName("Welcome to fever club take this tablet Dolo and cure it");
//      }
//      const UpdateTablet2 = () => {
//         setTabName("Welcome to seizure club take this tablet Levipil regularly");
//      }
//     useEffect(() => {
//         console.log("Side effects are Sleepy, Drowsiness");
//     }, []);

//     return (
//         <div>
//             <h1>{tabName}</h1>
//             <button onClick={UpdateTablet} >Click me if you get cold</button>
//             <button onClick={UpdateTablet1} >Click me if you get fever</button>
//             <button onClick={UpdateTablet2} >Click me if you get epilepsy</button>
//         </div>
//     );
// }

// export default About;

// import React, { useState, useEffect } from "react";

// const About = () => {
//   const [subscriptionMessage, setSubscriptionMessage] = useState(
//     "Subscribe to my YouTube channel for more updates!"
//   );

//   const handleSubscribe = () => {
//     setSubscriptionMessage("Thank you for subscribing to my YouTube channel!");
//   };

//   useEffect(() => {
//     console.log("Welcome to my channel! Enjoy the content!");
//   }, []);

//   return (
//     <div>
//       <h1>{subscriptionMessage}</h1>
//       <button onClick={handleSubscribe}>
//         Subscribe to My YouTube Channel
//       </button>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";

const About = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState(
    "Subscribe to my YouTube channel for more updates!"
  );

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setSubscriptionMessage("Thank you for subscribing to my YouTube channel!");
  };

  useEffect(() => {
    if (isSubscribed) {
      setSubscriptionMessage("You are already subscribed. Enjoy the content!");
    } else {
      console.log("Welcome to my channel! Enjoy the content!");
    }
  }, [isSubscribed]);

  return (
    <div>
      <h1>{subscriptionMessage}</h1>
      {!isSubscribed && (
        <button onClick={handleSubscribe}>
          Subscribe to My YouTube Channel
        </button>
      )}
    </div>
  );
};

export default About;

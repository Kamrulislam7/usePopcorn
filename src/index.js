import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StartRating from "./StarRating";

// function Test() {
//   const [rating, setmovieRating] = useState(0);
//   return (
//     <div>
//       <StartRating onSetRating={setmovieRating} maxRating={10} />
//       <p>give me rating{rating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />

    <StartRating
      maxRating={10}
      size={25}
      color="green"
      className="test"
      defaultRating={3}
    /> */}
  </React.StrictMode>
);

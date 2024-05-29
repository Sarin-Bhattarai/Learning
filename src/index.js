import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// //for props understanding and component understanding-project 1(pizza menu)
// function App() {
//   return (
//     <div className="pc">
//       <h1 style={{ color: "red" }}> Pizzeria Pescuto!!</h1>
//       <Pizza
//         name="pizzeria"
//         ingredients="tomato sauce, cheese"
//         photoName="pizzas/spinaci.jpg"
//       />
//       <Pizza
//         name="funghi"
//         ingredients="tomato sauce, chedar"
//         photoName="pizzas/funghi.jpg"
//       />
//       <Footer />
//     </div>
//   );
// }

// //Destructuring of props
// function Pizza({ name, ingredients, photoName }) {
//   // function Pizza(props) { //simple way of passing props
//   // console.log(props);
//   return (
//     <div className="pizza">
//       <img src={photoName} alt={name} />
//       {/* <img src={props.photoName} alt={props.name} /> simple way of receiving props  */}
//       <div className="receipe">
//         <h2>{name}</h2>
//         <p>{ingredients}</p>
//       </div>
//     </div>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   // console.log(hour);
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   // console.log(isOpen);
//   return (
//     <footer>
//       {isOpen ? (
//         <h2>We're open and open until {closeHour}:00 </h2>
//       ) : (
//         <h2>Sorry, we're closed. we are open at {openHour}:00 </h2>
//       )}
//     </footer>
//   );
// }

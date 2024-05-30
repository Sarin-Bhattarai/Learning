import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span>{item.quantity}</span>
        <span> {item.description}</span>
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X(X%)</em>
    </footer>
  );
}

//for understanding the state and components-project 2(Steps: Next, Previous and Close)
// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];
// const [step, setStep] = useState(1);
// const [isOpen, setIsOpen] = useState(true);
// function handlePrevious() {
//   if (step > 1) setStep((s) => s - 1); //use callback if you want to update current value of state.
// }
// function handleNext() {
//   if (step < 3) setStep((s) => s + 1);
// }
// return (
//   <>
//     <button className="close" onClick={() => setIsOpen((is) => !is)}>
//       &times;
//     </button>
//     {isOpen && (
//       <div className="steps">
//         <div className="numbers">
//           <div className={step >= 1 ? "active" : ""}>1</div>
//           <div className={step >= 2 ? "active" : ""}>2</div>
//           <div className={step >= 3 ? "active" : ""}>3</div>
//         </div>
//         <p className="message">
//           Step {step}: {messages[step - 1]}
//         </p>
//         <div className="buttons">
//           <button
//             style={{ backgroundColor: "#7950f2", color: "#fff" }}
//             onClick={handlePrevious}
//           >
//             Previous
//           </button>
//           <button
//             style={{ backgroundColor: "#7950f2", color: "#fff" }}
//             onClick={handleNext}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     )}
//   </>
// );

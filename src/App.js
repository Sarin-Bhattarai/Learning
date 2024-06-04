import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); //simply pushing the new items to array
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
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

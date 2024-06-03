import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]); //simply pushing the new items to array
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  //controlled elements
  //step 1: create a piece of state
  const [description, setDescription] = useState(""); //example of local state
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //to prevent the reloading while submitting the form
    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))} //since it is number we have to convert the value as number
      >
        {/* using Array.form() to create a array of 20 elements as number and use the value for option field dynamically*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description} //step 2: use the state as value for particular field
        onChange={(e) => setDescription(e.target.value)} //step 3: use the onChange for updating the value for field using setState
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
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

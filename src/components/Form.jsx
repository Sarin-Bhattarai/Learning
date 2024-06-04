import { useState } from "react";
export default function Form({ onAddItems }) {
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

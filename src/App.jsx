import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Practices from "./component/practices";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const handleEditTodo = () => {
    const newTodos = todos.map((todo, i) => {
      if (i === editIndex) {
        return inputValue;
      }
    return todo;
    });
    setTodos(newTodos);
    setEditIndex(-1);
    setInputValue("");
  };
// console.log("editIndex", editIndex);
  const handleStoreValue = () => {
   if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

const handleEditTodos = (index) => {
  setInputValue(todos[index]);
  setEditIndex(index);
};

  return (
    <>
    <Practices/>
       {/* <div className="App">
      <div className="input-container">
        <label
          htmlFor="visitors"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Small Input
        </label>
        <input
          type="text"
          onChange={handleInputChange}
          value={inputValue} 
          id="visitors"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
          placeholder=""
          required
        />
      </div>
      <p>{inputValue}</p>
      <button onClick={editIndex === -1 ? handleStoreValue : handleEditTodo}>
        {editIndex === -1 ? "Add Todo" : "Save Changes"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => handleEditTodos(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div> */}
    </>
   
  );
}

export default App;

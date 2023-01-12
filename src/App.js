import "./App.css";
import { sculptureList } from "./data.js";
import { useState } from "react";
import FilterableList from "./FilterableList";

function App() {
  // let Copy = () => {
  //   let textCopied = document.getElementById("text");
  //   console.log(textCopied);
  // };

  const [index, setIndex] = useState(1);

  let handleClick = () => {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
    console.log(sculptureList[index].name);
  };

  let handlePrevious = () => {
    if (index > 1) {
      setIndex(index - 1);
    } else {
      setIndex(1);
    }
    console.log(sculptureList[index].name);
  };
  // <img src={sculptureList[index].url} alt={sculptureList[index].alt} />

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <div className="App">
      <div className="container" id="text">
        <h1>React Learning </h1>
        <p>This is a react tutorial to practice on copying HTML code</p>
      </div>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleClick}>Next</button>

      <div>
        <h1>{sculptureList[index].name}</h1>
        <p>
          Page {index} of {sculptureList.length}
        </p>

        <h3>By {sculptureList[index].artist}</h3>

        <p>{sculptureList[index].description}</p>
      </div>

      <h4>Form Learning </h4>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>
          Hi, {firstName} {lastName}
        </h1>
        <button onClick={handleReset}>Reset</button>
      </form>

      <FilterableList />
    </div>
  );
}

export default App;

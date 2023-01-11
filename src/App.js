import "./App.css";
import { sculptureList } from "./data.js";
import { useState } from "react";

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
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  let Copy = () => {
    let textCopied = document.getElementById("text");
    console.log(textCopied);
  };

  return (
    <div className="App">
      <div className="container" id="text">
        <h1>React Learning </h1>
        <p>This is a react tutorial to practice on copying HTML code</p>
      </div>

      <button onClick={Copy}>Copy</button>
    </div>
  );
}

export default App;

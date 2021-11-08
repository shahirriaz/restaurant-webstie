// import HomePage from "./components/HomePage";
import HomePage from "Page/HomePage/HomePage";
import "./App.css"


//Main component


//Code uses BEM convention to name CSS classes
//className uses camelCase
//Each component has its own css file


function App() {
  return (
    <div className="App">
      <HomePage /> 
    </div>
  );
}

export default App;

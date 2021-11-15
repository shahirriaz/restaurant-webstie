// import HomePage from "./components/HomePage";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


//Main component


//Code uses BEM convention to name CSS classes
//className uses camelCase
//Each component has its own css file


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />     
        </Routes>
      </Router>
    </div>
  );
}

export default App;

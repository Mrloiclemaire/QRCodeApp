import {useState} from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./Components/Main/Admin"
import Main from "./Components/Main/Main"
import backgroundImage from "./assets/sushi2.jpg"


function App() {

  const [table, setTable] = useState("")
  

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/QR" element={<Admin nbTables={table} setTable={setTable}/>}/>
        {/* <Route path="/Menu"/> */}
      </Routes>
    </Router>
    
    
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home></Home> }></Route>
      </Routes>
    </BrowserRouter>
  </div>
 
  );
}

export default App;

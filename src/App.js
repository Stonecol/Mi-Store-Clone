import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { SmartPhones } from "./components/SmartPhones";
import { SmartHome } from "./components/SmartHome";
import { SmartOffice } from "./components/SmartOffice";
import { LifeStyle } from "./components/LifeStyle";
import { Homepage } from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/phone" element={<SmartPhones />}></Route>
        <Route path="/smart-home" element={<SmartHome />}></Route>
        <Route path="/life-style" element={<LifeStyle />}></Route>
        <Route path="/smart-office" element={<SmartOffice />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

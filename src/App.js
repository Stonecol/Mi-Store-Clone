import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { SmartPhones } from "./pages/SmartPhones";
import { SmartHome } from "./pages/SmartHome";
import { SmartOffice } from "./pages/SmartOffice";
import { LifeStyle } from "./pages/LifeStyle";
import { Homepage } from "./pages/Homepage";

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

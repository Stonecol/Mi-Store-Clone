import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SmartPhones } from "./pages/SmartPhones";
import { SmartHome } from "./pages/SmartHome";
import { SmartOffice } from "./pages/SmartOffice";
import { LifeStyle } from "./pages/LifeStyle";
import { Homepage } from "./pages/Homepage";
import { AppState } from "./context/AppState";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer";

function App() {
  return (
    <AppState>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/phone" element={<SmartPhones />}></Route>
            <Route path="/smart-home" element={<SmartHome />}></Route>
            <Route path="/life-style" element={<LifeStyle />}></Route>
            <Route path="/smart-office" element={<SmartOffice />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AppState>
  );
}

export default App;

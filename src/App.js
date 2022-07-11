import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

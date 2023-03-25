import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetProducts from "./pages/GetProducts";

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/newproduct" element={<AddProduct />}></Route>
          <Route path="/allproducts" element={<GetProducts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

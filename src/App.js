import Navbar from "./components/navbar";
import { useState } from "react";
import CartContext from "./context/cartContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routing/home";
import About from "./components/routing/about";
import Shop from "./components/routing/shop";
import ProductDetails from "./components/routing/productDetails";

function App() {
  const [cart, setCart] = useState({
    items: [],
    totalQty: 0,
    totalPrice: 0
  });
  
  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetails/>}/>
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductDetail from "./pages/Product/ProductDetail";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import LazyLoad from "./components/LazyLoad";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
          element={LazyLoad(() => import("./pages/HomePage/index"))()} />
        <Route path="/register" 
          element={LazyLoad(() => import("./pages/Register/index"))()} />
        <Route path="/login" 
          element={LazyLoad(() => import("./pages/Login/index"))()} />
        <Route path="/products/:productId" 
          element={<ProductDetail />} />
        <Route
          path="/juice"
          element={<Category name="Nước ép trái cây" type="juice" />}
        />
        <Route
          path="/veggie"
          element={<Category name="Nước ép rau củ" type="veggie" />}
        />
        <Route
          path="/shake"
          element={<Category name="Sinh tố" type="shake" />}
        />
        <Route
          path="/tea"
          element={<Category name="Trà trái cây" type="tea" />}
        />
        <Route 
          path="/cart" 
          element={LazyLoad(() => import("./pages/Cart/index"))()} />
        <Route 
          path="/contact" 
          element={LazyLoad(() => import("./pages/Contact/index"))()} />
        <Route 
          path="/admin" 
          element={LazyLoad(() => import("./pages/Admin/index"))()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

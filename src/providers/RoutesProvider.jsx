import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";


export default function RoutesProvider() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
              <Route element={<HomePage/>} path="/"></Route>
              <Route element={<ProductDetailsPage/>} path="/products/:id"></Route>
              <Route element={<CartPage/>} path="/cart"></Route>
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

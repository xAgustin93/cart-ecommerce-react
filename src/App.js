import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Products from "./components/Products";
import TopMenu from "./components/TopMenu";
import { STORAGE_PRODUCTS_CART } from "./utils/constants";
import useFetch from "./hooks/useFetch";

const urlApiProducts = "https://api.myjson.com/bins/17kfp5"; //http://myjson.com/17kfp5

function App() {
  const products = useFetch(urlApiProducts, null, null);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductsCart(idsProductsSplit);
    } else {
      setProductsCart([]);
    }
  };

  const addProductCart = (id, name) => {
    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} añadido al carrito.`);
  };

  return (
    <>
      <TopMenu
        products={products}
        productsCart={productsCart}
        getProductsCart={getProductsCart}
      />
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}

export default App;

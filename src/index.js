import React from "react"; // import React package 
import ReactDOM from "react-dom";// // import ReactDOM package
import ProductList from "./components/ProductList";
import "./style.css";// // import our external css file
ReactDOM.render(
  <ProductList />, document.getElementById("content")
);
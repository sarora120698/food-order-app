import React from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
// import "";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurent" />
        <h1>ReactFoods</h1>
      </div>
      <nav>
        <Button textOnly>Cart(0)</Button>
      </nav>
    </header>
  );
}

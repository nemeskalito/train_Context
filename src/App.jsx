import { useState } from "react";
import "./App.css";
import UserInfo from "./UserInfo";
import TaskItem from "./TaskItem";
import CartItem from "./CartItem/CartItem";

function App() {
  return (
    <>
      <UserInfo />
      <TaskItem />
      <CartItem />
    </>
  );
}

export default App;

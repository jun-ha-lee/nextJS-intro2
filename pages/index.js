import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  function counterUp() {
    setCounter((current) => current + 1);
  }

  return (
    <div>
      <h1>Hello! {counter}</h1>
      <button onClick={counterUp}>click me</button>
      <br />
      <NavBar />
    </div>
  );
}
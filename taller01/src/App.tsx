import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Father } from "./components/Father";
import { Header } from "./components/Header";
import { Operations } from "./components/Operations";

function App() {
  const [basicOperation, setBasicOperation] = useState<string>("Addition");
  const [typeOperation, setTypeOperation] = useState<string>("Odd");
  return (
    <div className="container-fluid">
      <Father>
        <Header
          selection={(option) => {
            setBasicOperation(option);
          }}
          selectionNumber = {(option)=> {
            setTypeOperation(option);
          }}
        />
        <Operations name={basicOperation} numberName = {typeOperation} />
      </Father>
    </div>
  );
}

export default App;

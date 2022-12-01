import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Father } from "./components/Father";
import { Operations } from "./components/Operations";

function App() {
  const [basicOperation, setBasicOperation] = useState<string>("Addition");

  return (
    <div className="container-fluid">
      <Father>
        <Header
          selection={(option) => {
            setBasicOperation(option);
          }}
        />

        <Operations name={basicOperation} />
      </Father>
    </div>
  );
}

export default App;

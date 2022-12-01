import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter, Router } from "react-router-dom";
import { Ruteo } from "./Routes/Ruteo";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Ruteo />
      </BrowserRouter>
    </div>
  );
}

export default App;

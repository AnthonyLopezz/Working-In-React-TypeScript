import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./app/components/Header";
import { Ruteo } from "./app/utilities/routes/Ruteo";

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

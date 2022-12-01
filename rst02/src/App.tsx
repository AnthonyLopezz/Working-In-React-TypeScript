import "./App.css";
import { Header } from "./Components/Header";
import { SumForm } from "./Components/SumForm";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="">
        <SumForm />
      </div>
    </div>
  );
}

export default App;

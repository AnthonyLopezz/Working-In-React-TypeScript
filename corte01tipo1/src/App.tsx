import { BrowserRouter } from "react-router-dom";

import './App.css';
import { Header } from "./app/componentes/contenedores/Header";
import { Ruteo } from "./app/utilidades/rutas/routes/Ruteo";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Ruteo />
      </BrowserRouter>
    </div>
  );
}

export default App;

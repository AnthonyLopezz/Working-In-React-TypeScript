import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./app/components/Header";
import { Ruteo } from "./app/utilities/routes/Ruteo";

import '../src/assets/css/elegant-icons.css'
import '../src/assets/css/nice-select.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/jquery-ui.min.css'
import '../src/assets/css/owl.carousel.min.css'
import '../src/assets/css/slicknav.min.css'
import '../src/assets/css/style.css'

function App() {
  return <div className="">
    <BrowserRouter>
        <Header />
        <Ruteo />
      </BrowserRouter>
  </div>;
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Catalog } from "../../components/Catalog";
import { Create } from "../../components/Create";
import { Manage } from "../../components/Manage";
import { Update } from "../../components/Update";
import { Welcome } from "../../components/Welcome";


export const Ruteo = () => {
    return <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/catalog" element={<Catalog/>} />
      <Route path="/manage" element={<Manage/>} />
      <Route path="/update/:code" element={<Update/>} />
    </Routes>;
  };
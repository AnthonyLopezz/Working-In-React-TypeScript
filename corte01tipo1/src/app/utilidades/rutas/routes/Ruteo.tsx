import { Route, Routes } from "react-router-dom";
import { Cat } from "../../../componentes/camisetas/Cat";
import { Catalog } from "../../../componentes/camisetas/Catalog";
import { Create } from "../../../componentes/camisetas/Create";
import { Manage } from "../../../componentes/camisetas/Manage";
import { Welcome } from "../../../componentes/contenedores/Welcome";

export const Ruteo = () => {
    return <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/manage" element={<Manage/>}/>
        <Route path="/cat" element={<Cat/>}/>
    </Routes>
}
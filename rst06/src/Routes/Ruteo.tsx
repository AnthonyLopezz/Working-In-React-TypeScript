import { Route, Routes } from "react-router-dom";
import { Blog } from "../components/Blog";
import { Form } from "../components/Form";
import { List } from "../components/List";
import { Login } from "../components/Login";
import { Shopping } from "../components/Shopping";
import { Welcome } from "../components/Welcome";

export const Ruteo = () => {
  return <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/form" element={<Form/>} />
    <Route path="/listed" element={<List/>} />
    <Route path="/shop" element={<Shopping/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/blog" element={<Blog/>} />
  </Routes>;
};

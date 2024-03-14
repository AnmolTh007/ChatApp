import React,{lazy} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Groups from './pages/Groups';

const home = lazy(() => import("./pages/Home"));
const login = lazy(() => import("./pages/Login"));
const chat = lazy(() => import("./pages/Chat"));
const groups = lazy(() => import("./pages/Groups"));


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/Login" element = {<Login />}/>
      <Route path="/Groups" element = {<Groups />}/>
      <Route path="/Chat/:chatid" element = {<Chat />}/>       //Dynamic routing

    </Routes>
    </BrowserRouter>
  );
};

export default App

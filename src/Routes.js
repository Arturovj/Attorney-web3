import React from "react";
import { Route, Routes as Routess } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Register/Register";

const Routes = () => {
    return (
        <Routess>
            <Route path='/' element={ <HomePage />} />
            <Route path='/statistics' element={""} />
            <Route path='/customers' element={""} />
            <Route path='/diagrams' element={""} />
            <Route path='/profile' element={""} />
            <Route path='/configuration' element={""} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/login' element ={<Login/>} />
        </Routess>
    );
};

export default Routes;

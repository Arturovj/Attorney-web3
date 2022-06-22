import React from "react";
import { Route, Routes as Routess } from "react-router-dom";
import ProtectedRoute from "./guards/ProtectedRouted";
import UnProtectedRoute from "./guards/UnProtectedRoutes";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/Register/Register";

const Routes = () => {
    return (
        <Routess>
            <Route path="/" element={<ProtectedRoute />} >

                <Route path='/' element={ <HomePage />} />
                <Route path='/statistics' element={""} />
                <Route path='/customers' element={""} />
                <Route path='/posts' element={""} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/configuration' element={""} />
                <Route path='/logout' element={<Logout/>} />
            
            </Route>
            <Route path="/" element={<UnProtectedRoute />} >
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/login' element ={<Login/>} />
            </Route>
        </Routess>
    );
};

export default Routes;

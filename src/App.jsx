import { useState, useEffect } from "react";
import {
    Navigate,
    Route,
    Routes,
    BrowserRouter,
    Link,
    useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import DetailMenu from "./pages/DetailMenu";
import AddMenu from "./pages/AddMenu";
import Login from "./pages/Login";
import Auth from "./components/Auth";

function Profile() {
    return (
        <>
            <Navbar color="secondary"></Navbar>
            <div className="container">
                <h1>Profile </h1>
            </div>
        </>
    );
}
function About() {
    return (
        <>
            <Navbar color="warning"></Navbar>
            <div className="container">
                <h1>About </h1>
            </div>
        </>
    );
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/menu" replace={true} />}
                    />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/menu-detail/:id" element={<DetailMenu />} />
                    <Route path="/about" element={<Auth><About /></Auth>} />
                    <Route path="/profile" element={<Auth><Profile /></Auth>} />
                    <Route path="/add-menu" element={<Auth><AddMenu /></Auth>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

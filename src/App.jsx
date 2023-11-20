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
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

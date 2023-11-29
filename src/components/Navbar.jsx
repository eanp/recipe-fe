import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction, LogoutAction } from "../redux/actions/auth";
const base_url = import.meta.env.VITE_BASE_URL;

const Username = ({username}) => {
    return <h1>{username}</h1>
}

export default function Navbar({ color }) {
    const dispatch = useDispatch()
    const auth = useSelector((state)=>state.auth)
	const [data,setData] = useState()
	
	const Login = () => {
        dispatch(LoginAction())
	}
	
	const Logout = () => {
        dispatch(LogoutAction())
	}


    return (
        <div>
            <nav
                className={`navbar navbar-expand-lg navbar-light bg-${color} px-5`}
            >
                <a className="navbar-brand" href="#">
                    Recipe
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        {auth.data ?
                        <li className="nav-item active">
                            <Link to="/add-menu" className="nav-link">
                                Add Menu
                            </Link>
                        </li>
                        : null}
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">
                                profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                about
                            </Link>
                        </li>
                    </ul>
                </div>
				{auth.data?.username && <Username username={auth.data.username} />}
				<button className="btn btn-danger ms-2"  onClick={auth.data ? Logout : Login}>
					{auth.data ?"Logout":"Login"}
				</button>
            </nav>
        </div>
    );
}

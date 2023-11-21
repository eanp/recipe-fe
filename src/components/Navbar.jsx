import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const base_url = import.meta.env.VITE_BASE_URL;

export default function Navbar({ color }) {
	const [data,setData] = useState()
	
	const Login = () => {
		if(localStorage.getItem("name")){
			setData(null)
			localStorage.clear()
			return
		}

		axios
			.post(base_url + `/auth/login`,{
				"email":"member@recipe.com",
				"password":"test1234"
			},  {headers: {'content-type': 'application/x-www-form-urlencoded'}})
			.then((res) => {
				console.log(res);
				localStorage.setItem("name",res.data.data.username)
				localStorage.setItem("token",res.data.data.token)
				localStorage.setItem("uuid",res.data.data.uuid)
				setData(res.data.data)
			})
			.catch((err) => console.log(err));
		console.log("axios login");
	}


	useEffect(()=>{
		let item = {
			username: localStorage.getItem("name"),
			token: localStorage.getItem("token")
		}
		localStorage.getItem("name") && setData(item)
	},[])


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
                        {data ?
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
				<h1>{data?.username}</h1>
				<button className="btn btn-danger ms-2"  onClick={Login}>
					{data ?"Logout":"Login"}
				</button>
            </nav>
        </div>
    );
}

import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenu } from "../../redux/actions/menu";
import { useSelector, useDispatch } from "react-redux";

const base_url = import.meta.env.VITE_BASE_URL;

export default function Menu() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const menu = useSelector((state) => state.menu);

    useEffect(() => {
        dispatch(getMenu());
    }, []);

    const toDetailMenu = (id) => {
        navigate(`/menu-detail/${id}`);
    };

    return (
        <>
            <Navbar color="primary"></Navbar>
            <div className="container">
                <h1>Menu Recipe</h1>
				<button className="btn btn-primary" onClick={()=>dispatch(getMenu())}>get menu</button>
                {menu.isLoading ? (
                    <div className="spinner-border" role="status" />
                ) : null}

                {menu.isSuccess ? menu.data?.map((item,index)=>{
					return(
						<h1 key={index+1} onClick={()=>toDetailMenu(item.id)}>
							{index+1} - {item.title}
						</h1>
					)
				}) : null}
            </div>
        </>
    );
}

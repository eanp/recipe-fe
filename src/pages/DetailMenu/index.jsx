import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMenu, getMenuDetail } from "../../redux/actions/menu";

export default function DetailMenu() {
	const dispacth = useDispatch()
	const  menu_detail = useSelector((state)=>state.menu_detail)
	const  auth = useSelector((state)=>state.auth)
	const navigate = useNavigate()
	const {id} = useParams()

    useEffect(() => {
		dispacth(getMenuDetail(id))
    }, []);

	const deleteById = () => {
		dispacth(deleteMenu(id,navigate))
	}

    return (
        <>
            <Navbar color="primary"></Navbar>
            <div className="container">
			{menu_detail.isLoading ? (
                    <div className="spinner-border" role="status" />
                ) : null}
				<h1>{menu_detail.data?.title} - {menu_detail.data?.id}</h1>
				{menu_detail.data?.photo ? <img src={menu_detail.data.photo} width={200} /> : null}
				{menu_detail.data?.ingredients?.map((item,index)=><h6 key={index+1}>{item}</h6>)}

				{auth.data.uuid === menu_detail.data?.users_id ? <>
				<button className="btn btn-primary ms-2"  >
					Edit
				</button>
				<button className="btn btn-danger ms-2"  onClick={deleteById}>
					Delete
				</button>
				</> : null}

            </div>
        </>
    );
}

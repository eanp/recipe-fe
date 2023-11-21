import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL;

export default function DetailMenu() {
	const navigate = useNavigate()
	const {id} = useParams()
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get(base_url + `/recipe/${id}`)
            .then((res) => {
                console.log(res);
				setData(res.data.data)
            })
            .catch((err) => console.log(err));
        console.log("axios get recipe menu detail");
    }, []);

	const deleteMenu = () => {
		axios
		.delete(base_url + `/recipe/${id}`,{
			headers: {
				'Authorization': `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then((res) => {
			console.log(res);
			navigate("/")
		})
		.catch((err) => console.log(err));
	}

    return (
        <>
            <Navbar color="primary"></Navbar>
            <div className="container">
				<h1>{data?.title} - {data?.id}</h1>
				{data?.photo ? <img src={data.photo} width={200} /> : null}
				{data?.ingredients?.map((item,index)=><h6 key={index+1}>{item}</h6>)}

				{localStorage.getItem("uuid") === data?.users_id ? <>
				<button className="btn btn-primary ms-2"  >
					Edit
				</button>
				<button className="btn btn-danger ms-2"  onClick={deleteMenu}>
					Delete
				</button>
				</> : null}

            </div>
        </>
    );
}

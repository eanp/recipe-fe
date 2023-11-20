import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const base_url = import.meta.env.VITE_BASE_URL;

export default function Menu() {
    const [data, setData] = useState();

    useEffect(() => {
		let menuUrl = localStorage.getItem("token") ? `/recipe` : `/recipe/detail`
		
        axios
            .get(base_url + menuUrl,{
				headers: {
					'Authorization': `Bearer ${localStorage.getItem("token")}`
				}
			})
            .then((res) => {
                console.log(res);
				setData(res.data.data)
            })
            .catch((err) => console.log(err));
        console.log("axios get recipe menu");
    }, []);

	useEffect(()=>{
		console.log(data)
	},[data])

    return (
        <>
            <Navbar color="primary"></Navbar>
            <div className="container">
                <h1>Menu Recipe</h1>

				{data?.map((item,index)=>{
					return(
						<h1 key={index+1}>
							{index+1} - {item.title}
						</h1>
					)
				})}
            </div>
        </>
    );
}

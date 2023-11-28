import axios from 'axios';
const base_url = import.meta.env.VITE_BASE_URL;

const headers = {
	'Authorization': `Bearer ${localStorage.getItem("token")}`
}

let menuUrl = localStorage.getItem("token") ? `/recipe` : `/recipe/detail`

export const getMenu = () => 
	async (dispatch) => {
		try{
			dispatch({type:'GET_MENU_PENDING'})
			const result = await axios.get(base_url + menuUrl,{headers})
			dispatch({payload:result.data.data,type:'GET_MENU_SUCCESS'})
		}catch(err){
			dispatch({payload:err.message,type:'GET_MENU_ERROR'})
		}
	
}
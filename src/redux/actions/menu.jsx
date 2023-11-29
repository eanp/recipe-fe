import axios from 'axios';
const base_url = import.meta.env.VITE_BASE_URL;	

export const getMenu = () => 
	async (dispatch,getState) => {
		try{
			dispatch({type:'GET_MENU_PENDING'})
			let token = await getState().auth.data.token
			let menu_url = token ? `/recipe` : `/recipe/detail`
			const result = await axios.get(base_url + menu_url,{headers:{'Authorization': `Bearer ${token}`}})
			dispatch({payload:result.data.data,type:'GET_MENU_SUCCESS'})
		}catch(err){
			dispatch({payload:err.message,type:'GET_MENU_ERROR'})
		}
	
}

export const getMenuDetail = (id) => 
	async (dispatch,getState) => {
		try{
			dispatch({type:'GET_MENU_DETAIL_PENDING'})
			let token = await getState().auth.data.token
			const result = await axios.get(base_url + `/recipe/${id}`,{headers:{'Authorization': `Bearer ${token}`}})
			dispatch({payload:result.data.data,type:'GET_MENU_DETAIL_SUCCESS'})
		}catch(err){
			dispatch({payload:err.message,type:'GET_MENU_DETAIL_ERROR'})
		}
	
}

export const deleteMenu = (id,navigate) => 
	async (dispatch,getState) => {
		try{
			dispatch({type:'GET_MENU_DELETE_PENDING'})
			let token = await getState().auth.data.token
			const result = await axios.delete(base_url + `/recipe/${id}`,{headers:{'Authorization': `Bearer ${token}`}})
			dispatch({payload:result.data.data,type:'GET_MENU_DELETE_SUCCESS'})
			navigate("/")
		}catch(err){
			dispatch({payload:err.message,type:'GET_MENU_DELETE_ERROR'})
		}
	
}
export const addMenu = (data,navigate) => 
	async (dispatch,getState) => {
		try{
			dispatch({type:'ADD_MENU_PENDING'})
			let token = await getState().auth.data.token
			const result = await axios.post(base_url + `/recipe/`,data,{headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type' : 'multipart/form-data'
			  }})
			dispatch({payload:result.data.data,type:'ADD_MENU_SUCCESS'})
			navigate("/")
		}catch(err){
			dispatch({payload:err.message,type:'ADD_MENU_ERROR'})
		}
	
}
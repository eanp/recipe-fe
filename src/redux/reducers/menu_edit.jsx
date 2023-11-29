const initialState = {
	data: null,
	isError: false,
	isSuccess: false,
	isLoading:false,
	errorMessage: '',
}


const menu_edit = (state=initialState,action) => {
	if(action.type=== 'GET_MENU_EDIT_PENDING'){
		return{
			...state,
			isLoading: true
		}
	} else if(action.type ==='GET_MENU_EDIT_SUCCESS'){
		return{
			...state,
			isLoading:false,
			isSuccess:true,
			isError:false,
			data:action.payload
		}
	} else if(action.type === 'GET_MENU_EDIT_ERROR'){
		return{
			...state,
			isLoading:false,
			isSuccess:false,
			isError:true,
			errorMessage:action.payload
		}
	} else {
		return state
	}
}

export default menu_edit
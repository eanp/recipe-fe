const initialState = {
	data: null,
	isError: false,
	isSuccess: false,
	isLoading:false,
	errorMessage: '',
}


const menu_add = (state=initialState,action) => {
	if(action.type=== 'ADD_MENU_PENDING'){
		return{
			...state,
			isLoading: true
		}
	} else if(action.type ==='ADD_MENU_SUCCESS'){
		return{
			...state,
			isLoading:false,
			isSuccess:true,
			isError:false,
			data:action.payload
		}
	} else if(action.type === 'ADD_MENU_ERROR'){
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

export default menu_add
import axios from "axios";
const base_url = import.meta.env.VITE_BASE_URL;

let data = {
    email: "member@recipe.com",
    password: "test1234",
};

export const LoginAction = () => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_PENDING" });
        const result = await axios.post(base_url + `/auth/login`, data, {
            headers: { "content-type": "application/x-www-form-urlencoded" },
        });
        dispatch({ payload: result.data.data, type: "AUTH_SUCCESS" });
    } catch (err) {
        dispatch({ payload: err.message, type: "AUTH_ERROR" });
    }
};

export const LogoutAction = () => async (dispatch) => {
	dispatch({type: "AUTH_LOGOUT"})
};

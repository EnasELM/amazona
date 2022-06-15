import axios from "axios";
import Cookie from "js-cookie";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../../constants/userConstants";

const signin = (email, password) => async(dispatch) => {

    try {
        dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
        const { data } = await axios.post("/api/users/signin", { email, password });
        console.log({ data }, 'databbb')
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        console.log(data, 'data')
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log('data')
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
}


export { signin };
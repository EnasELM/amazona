import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { signin } from "./actions/userActions";

function SigninScreen(props) {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userSignin = useSelector(state => state.userSignin)
    const {loading , userInfo, error} = userSignin;
    console.log(userSignin,'userSignin')
    let navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(() => {
          if(userInfo){
            navigate("/")
          }
        return () => {
          //
        };
    }, [userInfo]);
     
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signin (email,password)) 
        console.log( userInfo,'jj')

    }

  
    return <div className="form">
        <form action="" onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>{loading && <div>Loading...</div> }</li>
                <li>{error && <div>{error}</div> }</li>
                <li>
                {console.log( userSignin,'lllll')}
                    <label htmlFor="email">Email</label>
                    <input type="email"  name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </li>
                <li>
                    <button type="submit" className="button primary">signin</button>
                </li>
                <li>
                    New to amazona
                </li>
                <li>
                    <Link to="/register"className="button secodary text-center">Craete your amazona account</Link>
                </li>

            </ul>

        </form>

    </div>
}
export default SigninScreen;
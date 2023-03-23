import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import img from '../svg/HossBeans (1).svg'

function Login(){

    const { user, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user){
            navigate("/");
        }
     },[user, navigate]);

    return (
        <div className="Login">
            <div className="Login-Img">
                <img className="HossBeans" 
                    src={img} 
                    alt="HossBeans logo" 
                />
            </div>
            <div className="Login-Container">
                <h1>HossBeans</h1>
                <button className="sign-in" 
                    onClick={signInWithGoogle}>
                        Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Login
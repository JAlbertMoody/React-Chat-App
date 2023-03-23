import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

function Login(){

    const { user, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user){
            navigate("/");
        }
     },[user, navigate]);

    return (
        <div>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
            <h1>Login</h1>
        </div>
    )
}

export default Login
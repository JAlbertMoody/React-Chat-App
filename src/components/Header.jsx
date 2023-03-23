import React, { useContext, useEffect }  from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

function Header(){

    const { user, signOutOfGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user){
            navigate("/login");
        }
     },[user, navigate]);

    return (
        <div className="Header">
            <h1>Big Hoss Chat</h1>
            <button className="sign-out" onClick={signOutOfGoogle}>Sign Out</button>
        </div>
    )
}

export default Header
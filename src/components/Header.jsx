import React, { useContext, useEffect }  from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import icon from '../svg/logout-box-line.svg'
import img from '../svg/HossBeans (1).svg'

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
            <div className="Header--Container">
                <h1>Hoss-Beans</h1>
                <div className="Header--Img">
                    <img src={img} alt="HossBeans Logo" />
                </div>
            </div>
            <div className="Header--Logout">
                <img src={icon} alt="sign-out icon" />
                <button className="sign-out" 
                    onClick={signOutOfGoogle}>
                        Sign Out
                </button>
            </div>
        </div>
    )
}

export default Header
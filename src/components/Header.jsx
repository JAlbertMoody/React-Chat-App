import React, { useContext, useEffect, useState }  from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import icon from '../svg/logout-box-line.svg'
import img from '../svg/HossBeans (1).svg'

function Header(){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                {screenWidth > 767 ? <h1>HossBeans</h1> : null}
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
import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function ProtectedRoute() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    return <Outlet />;
}

export default ProtectedRoute
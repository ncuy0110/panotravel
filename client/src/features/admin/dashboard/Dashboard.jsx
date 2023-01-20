import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./dashboard.scss";
import Navbar from "../navbar/Navbar";
import {Route, Routes, useNavigate} from "react-router-dom";
import Zone from "../zone/Zone";
import Image from "../image/Image";
import {useEffect} from "react";

function Dashboard() {
    const navigate = useNavigate();
    // const auth = useSelector((state) => state.auth);
    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            navigate("/sign-in");
        }
    });
    return (
        <div className="dashboard">
            <Sidebar/>
            <div className="dashboardContainer">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Zone/>}/>
                    <Route path="/zone/:zoneId/image/*" element={<Image/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;

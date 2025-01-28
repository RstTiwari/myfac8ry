// src/Components/Sidebar/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <h3>Sidebar</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/quote">Quote</Link>
                </li>
                {/* Add other navigation links as needed */}
            </ul>
        </div>
    );
};

const sidebarStyles = {
    width: "250px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
};

export default Sidebar;

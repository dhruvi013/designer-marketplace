import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [adminData, setAdminData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if (!token) {
            navigate("/admin/login");  // Redirect to login if token is not available
        } else {
            // You could make an API call to verify the token
            setAdminData({ name: "Admin", email: "admin@example.com" }); // Mock data for now
        }
    }, [navigate]);

    return (
        <div className="dashboard" style={{ marginTop: "110px" }}> {/* Add marginTop to avoid navbar overlap */}
            <h2>Welcome to the Admin Dashboard</h2>
            <p>Name: {adminData?.name}</p>
            <p>Email: {adminData?.email}</p>
        </div>
    );
};

export default AdminDashboard;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post(
                "http://localhost:5000/auth/admin/login",  // Adjusted the URL for admin login
                { email, password },
                { withCredentials: true } // ⬅️ Needed to send/receive cookies
            );

            if (response.data?.message === "Login successful") {
                // Store the JWT token in local storage
                localStorage.setItem("adminToken", response.data.token);
                toast.success('Login successful!', {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    style: {
                        background: '#fff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '4px',
                        padding: '16px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    },
                    progressStyle: {
                        background: '#22c55e'
                    },
                    onClose: () => {
                        navigate("/admindashboard");
                    }
                });
            } else {
                setError("Invalid credentials");
                toast.error("Invalid credentials");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
            setError(errorMessage);
            toast.error(errorMessage);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">Admin Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-1 focus:ring-blue-600"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-1 focus:ring-blue-600"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-6 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;

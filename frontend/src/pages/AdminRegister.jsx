import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post(
                "http://localhost:5000/auth/admin/register",  // URL for admin registration
                { email, password },
                { withCredentials: true } // Needed to send/receive cookies
            );

            if (response.data?.message === "Registration successful") {
                alert("Registration successful!");
                navigate("/adminlogin"); // Redirect to the login page after successful registration
            } else {
                setError("Error in registration. Please try again.");
            }
        } catch (error) {
            setError(error.response?.data?.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-md">
                <h2 className="text-2xl font-bold text-center text-gray-900">Admin Registration</h2>
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
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <a href="adminlogin" className="text-blue-600">Login</a>
                </p>
            </div>
        </div>
    );
};

export default AdminRegister;

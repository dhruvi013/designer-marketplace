import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/protected`, { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password }, { withCredentials: true });
      setUser(res.data.user);
    } catch (error) {
      console.error(error.response?.data?.error);
    }
  };

  const logout = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

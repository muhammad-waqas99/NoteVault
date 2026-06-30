import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../contexts/Alert/AlertContext';
import '../css/Auth.css';
import NoteContext from '../contexts/Note/NoteContext';

const Login = () => {
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertContext);
  const HOST = process.env.REACT_APP_API_URL;
  
  const [credential, setcredential] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); 
const { setGlobalLoading } = useContext(NoteContext);
  const handleChange = (e) => {
    setcredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setGlobalLoading(true); 

  try {
    const response = await fetch(`${HOST}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      navigate("/");
      showAlert("Login Successfully ", "success");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  } catch (error) {
    showAlert("Something went wrong", "danger");
  } finally {
    setGlobalLoading(false);
  }
};

  return (
    <div className="nv-auth-wrapper">
      <div className="nv-auth-card">
        <h1 className="nv-auth-title">Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="nv-form-group">
            <label htmlFor="email" className="nv-form-label">Email</label>
            <input
              type="email"
              className="nv-input"
              id="email"
              name="email"
              onChange={handleChange}
              required
              minLength={5}
              value={credential.email}
            />
          </div>
          
          <div className="nv-form-group">
            <label htmlFor="password" className="nv-form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"} 
              className="nv-input"
              id="password"
              name="password"
              onChange={handleChange}
              required
              minLength={5}
              value={credential.password}
            />
   
            <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="checkbox" 
                id="showPass" 
                onChange={() => setShowPassword(!showPassword)} 
                style={{ cursor: 'pointer' }}
              />
              <label 
                htmlFor="showPass" 
                style={{ fontSize: '12px', color: 'rgba(17, 17, 17, 0.6)', cursor: 'pointer', fontFamily: 'Poppins' }}
              >
                Show Password
              </label>
            </div>
          </div>

          <button
            disabled={credential.email.length < 5 || credential.password.length < 5}
            type="submit"
            className="nv-btn-submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
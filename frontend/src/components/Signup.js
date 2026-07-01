import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../contexts/Alert/AlertContext';
import NoteContext from '../contexts/Note/NoteContext'; 
import '../css/Auth.css';

const Signup = () => {
  const { showAlert } = useContext(AlertContext);
  const { setGlobalLoading } = useContext(NoteContext); 
  const navigate = useNavigate();
  const HOST = process.env.REACT_APP_API_URL;
  
  const [credential, setcredential] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

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
      const { name, email, password } = credential;
      const response = await fetch(`${HOST}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.token);
        navigate("/");
        showAlert("Account Created Successfully", "success");
      } else {
        showAlert(json.error || "Signup failed", "danger");
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
        <h1 className="nv-auth-title">Signup</h1>

        <form onSubmit={handleSubmit}>
          <div className="nv-form-group">
            <label htmlFor="name" className="nv-form-label">
              Name <span style={{ fontSize: '11px', color: 'rgba(17,17,17,0.4)', marginLeft: '8px' }}>(min 3 chars)</span>
            </label>
            <input
              type="text"
              className="nv-input"
              id="name"
              name="name"
              onChange={handleChange}
              required
              minLength={3}
              value={credential.name}
            />
          </div>

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
            <label htmlFor="password" className="nv-form-label">
              Password <span style={{ fontSize: '11px', color: 'rgba(17,17,17,0.4)', marginLeft: '8px' }}>(min 6 chars)</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="nv-input"
              id="password"
              name="password"
              onChange={handleChange}
              required
              minLength={6}
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
            disabled={
              credential.name.length < 3 ||
              credential.email.length < 5 ||
              credential.password.length < 6
            }
            type="submit"
            className="nv-btn-submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
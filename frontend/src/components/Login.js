import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

     const navigate = useNavigate()


    const HOST = "http://localhost:5000"
          const [credential , setcredential] =useState({email : "" , password : ""})

      const handleChange = (e) => {
    setcredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e)=>{
     e.preventDefault();


        const response = await fetch(`${HOST}/api/auth/login`,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
     
    },

     body: JSON.stringify({email : credential.email , password : credential.password})
   })

   const json = await response.json()
   console.log(json)

     if(json.success){

      localStorage.setItem("auth-token" , json.token)
      navigate("/")
  }
  else{
    alert("invalid credentials")
  }


  }


  return (

<>         
    <h1>Login</h1>

        <form  onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>

                <input
                    type="text"
                    className="form-control glass-input"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required
                    minLength={5}
                    value={credential.email}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>

                <input
                    type="text"
                    className="form-control glass-input"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    required
                    minLength={5}
                    value={credential.password}
                />
            </div>

     

    

            <button
                disabled={credential.email.length <5  || credential.password.length<5 }
                type="submit"
                className="btn add-note-btn"
               
                type="submit"
            >
                <i className="fa-solid fa-plus me-2"  ></i>
                Login
                     
            </button>

        </form>
     </>
  )
}

export default Login
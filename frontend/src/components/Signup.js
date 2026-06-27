import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

     const navigate = useNavigate()


    const HOST = "http://localhost:5000"
          const [credential , setcredential] =useState({name: "" , email : "" , password : ""})

      const handleChange = (e) => {
    setcredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e)=>{
     e.preventDefault();
       const {name , email , password}  = credential

        const response = await fetch(`${HOST}/api/auth/signup`,{
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
     
    },

     body: JSON.stringify({name , email  , password })
   })

   const json = await response.json()
   console.log(json)

     if(json.success){

      localStorage.setItem("auth-token" , json.token)
      navigate("/login")
  }
  else{
    alert("Some Error Occur")
  }


  }


  return (

<>         
    <h1>Signup</h1>

        <form  onSubmit={handleSubmit}>


           <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>

                <input
                    type="text"
                    className="form-control glass-input"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    required
                    minLength={5}
                    value={credential.name}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>

                <input
                    type="email"
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
                    minLength={6}
                    value={credential.password}
                />
            </div>

     

    

            <button
               disabled={
    credential.name.length < 3 ||
    credential.email.length < 5 ||
    credential.password.length < 6
}
                type="submit"
                className="btn add-note-btn"
               
            >
                <i className="fa-solid fa-plus me-2"  ></i>
                Signup 
                     
            </button>

        </form>
     </>
  )
}

export default Signup;

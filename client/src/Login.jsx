
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){

                    history("/courses",{state:{id:email}})
                    //alert("Successfully Login")
                }
                else if(res.data=="notexist"){
                    alert("User not exist")
                }
            })
            .catch(e=>{
                alert("Please enter correct details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
       <section className="section">
        <div class="body">
        <div class="wrapper">
        <form action="">
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required/>
            <i class='bx bxs-user'></i>
          </div>
          <div class="input-box">
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required/>
            <i class='bx bxs-lock-alt' ></i>
          </div>
         
          <button type="submit" class="btn" onClick={submit} >Login</button>
          <div class="register-link">
            <p>Dont have an account? <a href="/register">Register</a></p>
          </div>
        </form>
      </div>
      </div>
      </section>
    )
}

export default Login

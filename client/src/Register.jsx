import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function register() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cpass,setcpass]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/register",{
                email,password
            })
            .then(res=>{
                if(password==cpass)
                {
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/login",{state:{id:email}})
                }}
                else{
                    alert("Password and confirm password doesnt match")
                }
            })
            .catch(e=>{
                alert("wrong details")
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
          <h1>Register</h1>
          <div class="input-box">
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required/>
            <i class='bx bxs-user'></i>
          </div>
          <div class="input-box">
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required/>
            <i class='bx bxs-lock-alt' ></i>
          </div>
          <div class="input-box">
            <input type="password" onChange={(e) => { setcpass(e.target.value) }} placeholder="Confirm Password" required/>
            <i class='bx bxs-lock-alt' ></i>
          </div>
         
          <button type="submit" class="btn" onClick={submit} >Register</button>
          <div class="register-link">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
      </div>
      </section>
    )
}

export default register;
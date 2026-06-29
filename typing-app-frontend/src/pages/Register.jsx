import { useState } from "react";
import { register } from "../services/authService";

export default function Register() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const handleRegister=async()=>{

        try{

            const msg=await register(username,password);

            alert(msg);

        }catch{

            alert("Register Failed");

        }

    }

    return(

        <div>

            <h1>Register</h1>

            <input
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
            />

            <br/><br/>

            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <br/><br/>

            <button onClick={handleRegister}>
                Register
            </button>

        </div>

    )

}
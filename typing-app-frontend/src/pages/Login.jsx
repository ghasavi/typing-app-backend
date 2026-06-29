import { useState } from "react";
import { login } from "../services/authService";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const data = await login(username, password);

            // Save JWT token
            localStorage.setItem("token", data.token);

            alert("Login Successful!");

            window.location.href = "/home";

        } catch (error) {

            alert("Invalid username or password!");

        }

    };

    return (

        <div>

            <h1>Login</h1>

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

            <button onClick={handleLogin}>
                Login
            </button>

        </div>

    );

}
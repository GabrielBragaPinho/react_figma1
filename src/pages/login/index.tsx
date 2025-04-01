import "./index.css"
import { useState } from "react"
import { useAuth } from "../../providers/AuthContext/AuthContext"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"


export const Login = () => {
    const {login} = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate("/user")
        }
    }

    return (
        <div className="auth-container">
            <Header/>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
          </form>
          <Footer/>
        </div>
      );
}
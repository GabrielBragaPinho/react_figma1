import "./index.css"
import { useState } from "react"
import { useAuth } from "../../providers/AuthContext/AuthContext"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"


export const Register = () => {
    const {register} = useAuth();
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        register(name, email, password);
        navigate("/login")
    }
    return (
        <div className="auth-container">
            <Header />
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Register</button>
        </form>
        <Footer />
      </div>
    )
}

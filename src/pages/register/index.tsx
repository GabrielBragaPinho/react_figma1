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
      <div className="reg-c1">
        <Header />
        <div className="reg-c2">
          <h2 className="reg-title">Register</h2>
          <form className="reg-form" onSubmit={handleRegister}>
            <input className="reg-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="reg-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="reg-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button className="reg-btn" type="submit">Register</button>
          </form>
        </div>
        <Footer />
      </div>
    )
}

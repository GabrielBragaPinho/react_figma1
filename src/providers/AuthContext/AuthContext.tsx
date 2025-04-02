import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    register: (name:string, email:string, password: string) => void;
    login: (email:string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: { children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        console.log("AuthProvider Loaded ✅");
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            console.log("User found in localStorage:", savedUser);
          setUser(JSON.parse(savedUser));
        }
      }, []);

    const register = (name:string, email:string, password: string) => {
        const newUser = { name, email, password};
        localStorage.setItem("registeredUser", JSON.stringify(newUser));
        alert("Registration successful! You can now log in.");
    }

    const login = (email: string, password: string) => {
        const savedUser = JSON.parse(localStorage.getItem("registeredUser") || "{}");
        if (savedUser.email === email && savedUser.password === password) {
            const loggedInUser = { name: savedUser.name, email };

        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        return true;
    } 
        alert("Invalid email or password.");
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout}}>
            {children}
            </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
};
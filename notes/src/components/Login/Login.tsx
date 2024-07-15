import { useState } from "react"

export function Login(){

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setUser(e.target.value)
    }

    return (    
        <div>
            <h1>Login Page</h1>
            <form onSubmit={}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
}
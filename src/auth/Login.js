import React from 'react'
import { useState } from 'react'
import "./login.css"

class Credential {
    constructor(email = "_", password = "_") {
        this.email = email
        this.password = password
    }
}
const LoginPage = () => {

    const [credentials, setCredentials] = useState(new Credential())

    const isFormValid = () =>
    credentials.email!="_" 
    && credentials.password!="_";

    const login = (e) => {
        e.preventDefault()
        if(isFormValid)
        alert("login ...")
        else
        setCredentials({...new Credential("","")})
    }

    const handleChangeInput
        = (e) => {
            let { name, value } = e.target
            setCredentials({ ...credentials, [name]: value })
        }

    return (
        <form onSubmit={login}>
            <input name="email"
                onChange={handleChangeInput}
                placeholder="Your Email" />
            <br />
            <p className={credentials.email == "" ? "error" : "d-none"}>
                Email Invalid !!</p>

            <input name="password"
                onChange={handleChangeInput}
                type="password" placeholder="Your Password" />
            <br />
            <p className={credentials.password == "" ? "error" : "d-none"}>
                Password Invalid !!</p>
            <input type="submit" />
        </form>
    )
}

export default LoginPage

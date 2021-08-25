import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <Link to="/register">Register</Link>
            <Link to="/login">sign in</Link>
            <h1>vaaah login hogaya....</h1>
        </div>
    )
}

export default Landing

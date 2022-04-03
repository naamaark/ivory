import React, { useState } from 'react'
import { userService } from '../services/user.service'

function LoginSignup({ onToggleLogin }) {
    const [user, setUser] = useState({ 'id': '', 'name': '', 'password': '' })
    const [isSignup, setSignup] = useState(true)

    function handleChange(ev) {
        const field = ev.target.name;
        const value = ev.target.value;
        setUser({ ...user, [field]: value });
    }

    function onSubmit(ev = null) {
        if (ev) ev.preventDefault();
        if (!user.name || !user.password) return;
        if (isSignup) userService.signup(user);
        else userService.login(user)
        setUser({ 'id': '', 'name': '', 'password': '' })
    }

    function toggleSignup() {
        setSignup(!isSignup)
    }

    function closeModal() {
        onToggleLogin()
    }

    return (
        <div className="login-modal">
            <button onClick={closeModal}>Close</button>
            <button onClick={toggleSignup}>{isSignup ? 'Signup' : 'Login'}</button>
            <div className="signup-section">
                {<form className="signup-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <button >{isSignup ? 'Signup' : 'Login'}</button>
                </form>}
            </div>
        </div>
    );
}

export default LoginSignup;
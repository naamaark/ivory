import React, { useState } from 'react';
import LoginSignup from './login-signup';

function Header() {
    const [isLogin, toggleLogin] = useState(false)
    function onToggleLogin() {
        toggleLogin(!isLogin)
    }
    return (
        <div className="header flex space-between align-center">
            <div className="logo">Ivory</div>
            <div className="user-nav">
                <button onClick={onToggleLogin} className="login-btn">Login or Signup</button>
                <a href="#" className="user-link">
                    User
                </a>
            </div>

            {isLogin && <LoginSignup onToggleLogin={onToggleLogin}></LoginSignup>}
        </div>
    );
}

export default Header;

import React, { useState } from 'react';
import "./lead.scss"
import { Link } from "react-router-dom"

const lead = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };
  return (
    <div className='lead'>
            <div className="center">
                <div className="login">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="email">
                                <input type="email" placeholder='email' value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="password">
                                <input type="password" placeholder='password' value={password} onChange={handlePasswordChange} />
                            </div>
                            <div className="button">
                                <button type="submit">Collab</button>
                            </div>
                        </div>
                    </form>
                    <ul>
                        <Link to="/member-login"><li>Sign In as Member</li></Link>
                        <li>|</li>
                        <Link to="/admin-login"><li>Sign In as Admin</li></Link>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default lead
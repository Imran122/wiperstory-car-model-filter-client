import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const [loginData, setLoginData] = useState('')
    const { user, loginUser, isLoading, authError } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const handleOnBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        e.preventDefault();
    }
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <div className="wrapper">
                <div className="login-container">
                    <div className="col-left">
                        <div className="login-text">
                            <h2>Logo</h2>
                            {isLoading &&
                                <div class="spinner-main">
                                    <div class="loader-circle"></div>
                                </div>
                            }

                        </div>
                    </div>
                    <div className="col-right">
                        <div className="login-form">
                            {/*  after usewr creating succes message show */}
                            {user?.email &&
                                <div class="alert alert-success" role="alert">
                                    successfully LogIn user
                                </div>
                            }
                            {/* if there is error the it will work */}
                            {authError &&
                                <div class="alert alert-danger" role="alert">
                                    {authError}
                                </div>
                            }

                            <h2>Login</h2>
                            {!isLoading &&
                                <form onSubmit={handleLoginSubmit}>
                                    <p>
                                        <input type="email" onBlur={handleOnBlur} name="email" placeholder="Your email" required />
                                    </p>
                                    <p>
                                        <input type="password" onBlur={handleOnBlur} name="password" placeholder="Password" required />
                                    </p>
                                    <p>
                                        <input className="btn" type="submit" value="Sing In" />
                                    </p>
                                    <p>
                                        <Link to="/register">
                                            <a>Create an account.</a>
                                        </Link>
                                    </p>
                                </form>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
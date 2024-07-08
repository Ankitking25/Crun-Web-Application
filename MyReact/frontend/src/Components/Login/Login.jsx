import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../LoginValidation/LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        const err = Validation(values);

        if (err.email === "" && err.password === "") {
            axios.post('http://localhost:8080/login', values)
                .then(res => {
                    if (res.data.Login) {
                        if (res.data.role === "agent") {
                            navigate('/agent'); // Redirect to admin page
                        } 
                        else if(res.data.role==="admin"){
                            alert('Please Login at Admin page')
                        }
                    } else {
                        alert("Login failed. Email and Password Didn't Match");
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <button type="submit" className='btn btn-primary w-100'>Login</button>

                    <Link to="/signup" className='btn btn-default border w-100 text-decoration-none mt-3'>Create Account</Link>
                    <Link to="/adminlogin" className='btn btn-primary border w-100 text-decoration-none mt-3'>Admin Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;












//login start page:
/*
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../LoginValidation/LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        const err = Validation(values);

        if (err.email === "" && err.password === "") {
            axios.post('http://localhost:8080/login', values)
                .then(res => {
                    if (res.data.Login) {
                        if (res.data.role === "agent") {
                            navigate('/agent'); // Redirect to admin page
                        } 
                        else if(res.data.role==="admin"){
                            alert('Please Login at Admin page')
                        }
                    } else {
                        alert("Login failed. Email and Password Didn't Match");
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <button type="submit" className='btn btn-primary w-100'>Login</button>

                    <Link to="/signup" className='btn btn-default border w-100 text-decoration-none mt-3'>Create Account</Link>
                    <Link to="/adminlogin" className='btn btn-primary border w-100 text-decoration-none mt-3'>Admin Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;

*/
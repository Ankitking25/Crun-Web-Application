import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../../LoginValidation/LoginValidation';
import axios from 'axios';


const AdminLogin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
  
    const [errors, setErrors] = useState({});

    const handleBack = () => {
     navigate(-1); // This will navigate back to the previous page
 };

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
                        if (res.data.role === "admin") {
                            navigate('/admin'); // Redirect to agent page
                        } else if (res.data.role === "agent") {
                            alert("You are not Admin");
                        }
                    } else {
                        alert("Login failed. Email and Password Didn't Match");
                    }
                })
                .catch(err => {
                    console.log(err);
                    alert("Error logging in. Please try again.");
                });
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Admin Email</strong></label>
                        <input
                            type='email'
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

                    <button type='submit' className='btn btn-primary w-100'>Login</button>
                    <Link to='/' className='btn btn-danger mt-3' onClick={handleBack}>Back</Link>
                    
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;







//Admin start page:
/*

import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../../LoginValidation/LoginValidation';
import axios from 'axios';

const AdminLogin = () => {
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
                        if (res.data.role === "admin") {
                            navigate('/admin'); // Redirect to agent page
                        } else if (res.data.role === "agent") {
                            alert("You are not Admin");
                        }
                    } else {
                        alert("Login failed. Email and Password Didn't Match");
                    }
                })
                .catch(err => {
                    console.log(err);
                    alert("Error logging in. Please try again.");
                });
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Admin Email</strong></label>
                        <input
                            type='email'
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

                    <button type='submit' className='btn btn-primary w-100'>Login</button>
                    <Link to='/' className='btn btn-danger mt-3'>Home</Link>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;

 */
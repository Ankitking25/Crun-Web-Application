import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../../SignupValidation/SignupValidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        role: 'admin' // Default role selection
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({}); // Changed errors to an object

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value })); // Corrected the update method
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        const err = Validation(values);

        if (err.name === "" && err.email === "" && err.password === "") {
            axios.post('http://localhost:8080/signup', values)
                .then(res => {
                    navigate('/'); // Redirect to login page after successful signup
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            name='name'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
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

                    <div className='mb-3'>
                        <label htmlFor='role'><strong>Organizer</strong></label>
                        <select
                            name='role'
                            value={values.role}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        >
                            <option value="admin">Admin</option>
                            <option value="agent">Agent</option>
                        </select>
                    </div>

                    <button type='submit' className='btn btn-primary w-100'>Sign Up</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;

















//start code:
/*
import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../../SignupValidation/SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({}); // Changed errors to an object

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value })); // Corrected the update method
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const err = Validation(values);

    if(err.name==="" && err.email==="" && err.password===""){
        axios.post('http://localhost:8080/signup',values).then(res=> navigate('/')).catch(err=>console.log(err));
    }

  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
      <div className='bg-white p-3 rounded w-25'>
          <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input
              type="text"
              placeholder='Enter Name'
              name='name'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
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

          <label htmlFor="user" className='mb-3'><strong>Organizer- </strong></label>
          <select name="Admin" id="1">
            <option value="0">admin</option>
            <option value="1">agent</option>
          </select>

          <button type='submit' className='btn btn-primary w-100'>Sign Up</button>
          <p>You agree to our terms and policies</p>
          <Link to="/" className='btn btn-default border w-100 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;















*/
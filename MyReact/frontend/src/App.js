import './App.css';
import Login from './Components/Login/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Login/Signup/Signup.jsx'
import AdminLogin from './Components/Login/AdminLogin/AdminLogin.jsx';
import Home from './Components/Home/Home.js';
import Admin from './Components/UserType/Admin/Admin.js'
import Agent from './Components/UserType/Agent/Agent.js'; 
import Create  from './Components/UserType/Agent/Create.js';

import Details from './Components/UserType/Agent/Details.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Read from './Components/UserType/Agent/Read.js'
import Update from './Components/UserType/Agent/Update.js'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
                <Route path='/adminlogin' element={<AdminLogin />} />
                <Route path='/admin' element={<Admin />} /> {/* Route for admin */}
                <Route path='/agent' element={<Agent />} /> {/* Route for agent */}


                <Route path='/create' element={<Create/>} /> 
                <Route path='/read/:id' element={<Read/>}/>
                
                <Route exact path="/edit/:id" element={<Update/>} />
                <Route exact path="/view/:id" component={Details} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Admin from '../UserType/Admin';
// import Agent from '../UserType/Agent';


// function Home() {
//   const [role, setRole] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//       axios.get('http://localhost:8080/')
//           .then(res => {
//               if (res.data.valid) {
//                   setRole(res.data.role);
//               } else {
//                   navigate('/login');
//               }
//           })
//           .catch(err => {
//               console.log(err);
//               navigate('/login');
//           });
//   }, [navigate]);

//   return (
//       <div>
//           <div>
//               <h2>Role Based Authentication</h2>
//               {role === "admin" && <Admin />}
//               {role === "agent" && <Agent />}
//           </div>
//       </div>
//   );
// }

// export default Home;
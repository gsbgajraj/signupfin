import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup(){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  
  const handlesubmit = (e)=>{
   e.preventDefault()
   axios.post("http://localhost:3001/register", {name,email,password})
   .then(result => {console.log(result)
   navigate("/login")
  
  })
   .catch(err=> console.log(err))
  }

return(
    <>
     <form onSubmit={handlesubmit}>
       <h2 style={{ textAlign: 'center', color: '#333' }}>Sign Up</h2>
                <label htmlFor="username" style={{ display: 'block', margin: '10px 0 5px', color: '#555' }}>name</label>

                <input type="text" id="username" name="username" required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
                onChange={(e) => setName(e.target.value)}
                 />

                <label htmlFor="email" style={{ display: 'block', margin: '10px 0 5px', color: '#555' }}>Email</label>
                
                <input type="email" id="email" name="email" required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} 
                onChange={(e) => setEmail(e.target.value)}
                
                />

                <label htmlFor="password" style={{ display: 'block', margin: '10px 0 5px', color: '#555' }}>Password</label>
                
                <input type="password" id="password" name="password" required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
                onChange={(e) => setPassword(e.target.value)}
                 />

                <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%'}}>Register</button>
                </form>
                <p>Already have an account</p>
                <Link to="/login">Login</Link>
    </>
  );
};

export default Signup;
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register(){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [role,setRole]=useState('student');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    try{
      const res = await axios.post('/api/auth/register',{name,email,password,role});
      localStorage.setItem('ph_token', res.data.token);
      nav('/dashboard');
    }catch(err){ alert(err.response?.data?.error || 'Register failed'); }
  }
  return (<div className="container"><h2>Register</h2><form onSubmit={submit}><input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name"/><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/><select value={role} onChange={e=>setRole(e.target.value)}><option value="student">Student</option><option value="recruiter">Recruiter</option></select><button>Register</button></form></div>)
}

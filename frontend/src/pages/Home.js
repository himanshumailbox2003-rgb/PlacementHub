import React from 'react';
import { Link } from 'react-router-dom';
export default function Home(){
  return (
    <div className="container">
      <div className="header"><h1>PlacementHub</h1><div><Link to='/login'>Login</Link> | <Link to='/register'>Register</Link></div></div>
      <p>Professional placement & recruitment portal built for your resume/project.</p>
    </div>
  )
}

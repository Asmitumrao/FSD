/* eslint-disable react/prop-types */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Login({logindata}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  function verification()
  {
 
   if(logindata.email==email)
    alert("Valid User")

  }



  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" onClick={verification} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

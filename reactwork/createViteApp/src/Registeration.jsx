import { useState } from 'react';
import PropTypes from 'prop-types';

function Registration({ regdata }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doRegistration = (e) => {
    e.preventDefault();
    const objectData = {
      name,
      email,
      password,
    };
    regdata(objectData);
  
  };

  return (
    <div className="container mt-5">
      <h2>Registration Form</h2>
      <form onSubmit={doRegistration}>
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
          <label htmlFor="exampleInputText1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputText1"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

Registration.propTypes = {
  regdata: PropTypes.func.isRequired,
};

export default Registration;

import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = "user@rarite.com";
    const validPassword = "123456password";

    if (email === validEmail && password === validPassword) {
      setStatus({
        type: 'success',
        message: 'Login successful! Redirecting...'
      });
    } else {
      setStatus({
        type: 'error',
        message: 'Invalid email or password. Please try again.'
      });
    }
  };

  return (
    <form className="form text-start" onSubmit={handleSubmit}>
      {status.message && (
        <div 
          className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} text-center`} 
          role="alert"
        >
          {status.message}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 form-check">
        <input 
          type="checkbox" 
          className="form-check-input" 
          id="exampleCheck1" 
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-2">
        Submit
      </button>
    </form>
  );
}
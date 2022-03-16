import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { startLoginEmailPassword } from '../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: 'axelmontes',
    password: 'adsda',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(formValues.email, formValues.password));
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={formValues.email} onChange={handleInputChange}/>
        <input className="auth__input" type="password" placeholder="Password" name="password"value={formValues.password} onChange={handleInputChange} />
        <button className="btn btn-primary btn-block" type="submit">Login</button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn">
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <NavLink className="link" to="/auth/register">Create new account</NavLink>
      </form>
    </>
  )
}

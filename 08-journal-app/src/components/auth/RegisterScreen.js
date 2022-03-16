import React from 'react';
import { NavLink } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>
          <input className="auth__input" type="text" placeholder="Name" name="name" autoComplete="off"/>
          <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off"/>
          <input className="auth__input" type="password" placeholder="Password" name="password"/>
          <input className="auth__input" type="password"placeholder="Confirm password"name="password2"/>

          <button className="btn btn-primary btn-block mb-5" type="submit">Register</button>

          <NavLink className="link" to="/auth/login">Already registered?</NavLink>
      </form>
    </>
  )
}

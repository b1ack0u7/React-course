import Swal from "sweetalert2";
import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";

export const StartLogin = (email, password) => {
  return async(dispatch) => {
    const { data: resp } = await fetchSinToken('auth',{email, password}, 'POST');
    console.log(resp);

    if(resp.ok) {
      localStorage.setItem('token', resp.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(login({
        uid: resp.uid,
        name: resp.name,
      }))
    }
    else {
      Swal.fire('Error', resp.msg);
    }
  }
}

export const StartRegister = (name, email, password) => {
  return async(dispatch) => {
    const { data: resp } = await fetchSinToken('auth/register',{email, password, name}, 'POST');
    console.log(resp);

    if(resp.ok) {
      localStorage.setItem('token', resp.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(login({
        uid: resp.uid,
        name: resp.name,
      }))
    }
    else {
      Swal.fire('Error', resp.msg);
    }
  }
}

export const StartChecking = () => {
  return async(dispatch) => {
    const { data: resp } = await fetchConToken('auth/register');
    console.log(resp);

    if(resp.ok) {
      localStorage.setItem('token', resp.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(login({
        uid: resp.uid,
        name: resp.name,
      }))
    }
    else {
      Swal.fire('Error', resp.msg);
    }
  }
}

const login = (user) => ({
  type: types.authLogin,
  payload: user
})
import Axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const fetchSinToken = async(endpoint, data, method = 'GET') => {
  const url = `${baseURL}/${endpoint}`;

  if(method === 'GET') {
    return Axios.get(url)
  }
  else {
    return Axios({
      method: method,
      url: url,
      data: {...data,},
    })
    .then(res => {return res})
    .catch(err => {return err.response})
  }
}

const fetchConToken = async(endpoint, data, method = 'GET') => {
  const url = `${baseURL}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  if(method === 'GET') {
    return Axios.get(url, {
        headers: {'x-token':  token}
      })
      .then(res => {return res})
      .catch(err => {return err.response})
  }
  else {
    return Axios({
      method: method,
      url: url,
    }, 
      {headers: {'x-token':  token}
    })
    .then(res => {return res})
    .catch(err => {return err.response})
  }
}

export { fetchSinToken, fetchConToken }
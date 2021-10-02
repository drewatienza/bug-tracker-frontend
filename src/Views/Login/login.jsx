import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../Controllers/Redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    name: '',
    password: ''
  })

  const inputChanged = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    dispatch(signIn(formInput));
    e.preventDafault();
  }

  return(
    <div className="loginBG">
      <h1>Login:</h1>
      <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name} />
      <input type='password' name='password' placeholder='Password' onChange={inputChanged} value={formInput.password} />
      <button type='submit' onClick={submit}>Login</button>
    </div>
  )
}

export default Login;
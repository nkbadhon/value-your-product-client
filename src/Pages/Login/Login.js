import React, { useContext, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm('');
  const { logIn } = useContext(AuthContext);

  const [logInerror, setLoginError] = useState('')
  const location = useLocation();
  const Navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = data => {
    console.log(data);
    setLoginError('');
    logIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Navigate(from, { replace: true });
      })
      .catch(error => {

        console.log(error.message)
        setLoginError(error.message)
      });
  }

  return (
    <div className=' h-[800px] flex justify-center items-center'>
      <div className='w-96 p-6'>
        <h2 className='text-4xl font-bold text-center'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: "Please enter valid Email address" })} className="input input-bordered w-full max-w-xs" />
            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", { required: "Enter Password", minLength: { value: 6, message: 'Password must be six charecter long' } })} className="input input-bordered w-full" />
            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
            {logInerror && <p className='text-red text-center'>{logInerror}</p>}
          </div>
          <input className='btn btn-info w-full text-white' value="Login" type="submit" />

        </form>
        <p>Need an account? <Link className='text-info' to='/registration'>Registration</Link> </p>
        <div className="divider">OR</div>
        <button className='btn btn-info w-full text-white'>Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
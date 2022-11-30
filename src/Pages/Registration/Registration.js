import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const bors = ['Buyer', 'Seller'];


const Registration = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm('');

  const { createUser, updateUser } = useContext(AuthContext);

  const [registrationError, setRegistrationError] = useState('')

  const handleRegistration = (data) => {
    console.log(data);
    setRegistrationError('');
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Registration Successfull');
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {

            saveUser(data.name, data.email, data.type);

          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error)
        setRegistrationError(error.message)

      });
  }

  const saveUser = (name, email, type) => {
    const user = { name, email, type };
    fetch('https://reselling-web-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        getUserToken(email);

      })
  }

  const getUserToken = email => {
    fetch(`https://reselling-web-server.vercel.app/jwt?email=${email}`)
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          navigate('/');
        }
      })
  }
  return (
    <div className=' h-[800px] flex justify-center items-center'>
      <div className='w-96 p-6'>
        <h2 className='text-4xl font-bold text-center'>Registration</h2>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" {...register("name", { required: "Please enter your name" })} className="input input-bordered w-full max-w-xs" />
            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
          </div>
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
          </div>


          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">I am</span>
            </label>
            <select
              {...register('type')}
              className="select input-bordered w-full max-w-xs">

              {
                bors.map(Type => <option key={Type._id}
                  value={Type}>{Type}</option>)
              }
            </select>
            {registrationError && <p className='text-red-600'>{registrationError}</p>}

          </div>
          <input className='btn btn-info mt-4 w-full text-white' value="Registration" type="submit" />


        </form>
        <p>Already have an account? <Link className='text-info' to='/login'>Login</Link> </p>
        <div className="divider">OR</div>
        <button className='btn btn-info w-full text-white'>Continue with Google</button>
      </div>
    </div>
  );
};

export default Registration;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Registration = () => {
  const [error , setError] = useState("")

const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
          setError('Email and password fields cannot be empty.');
          return;
        }
       if (password.length < 6) {
          setError('Password must be at least 6 characters');
          console.log('Password must be at least 6 characters')
          return;
        }
        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user
            console.log(createdUser)
            form.reset()
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration Please</h1>
       </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleRegister}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo Url" name='photo' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {error && <div className="alert alert-error">{error}</div>}
          <p>Already Have an Account? <Link to="/login">Login</Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
      </form>

      </div>
    </div>
  </div>
  

</div>
        </div>
    );
};

export default Registration;
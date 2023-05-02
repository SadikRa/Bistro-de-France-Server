// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
const Login = () => {

    const { signIn , logInWithGoogle , logInWithGitHub} = useContext(AuthContext)


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            Navigate('/', { replace: true });
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleLoginWithGoogle = () =>{
      logInWithGoogle()
    }
    const handleLoginWithGitHub = () =>{
      logInWithGitHub()
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Please</h1>
       </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
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
          <p> Don't Have an Account? <Link to="/registration">Register</Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <button onClick={handleLoginWithGoogle} className='my-3 btn btn-warning'> <FaGoogle /> Login with Google</button>
            <button onClick={handleLoginWithGitHub} className='btn btn-warning' > <FaGithub></FaGithub> Login with Github</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
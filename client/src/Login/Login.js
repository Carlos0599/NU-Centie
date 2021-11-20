import logo from '../assets/NU-Logo-home.png';
import { useForm } from 'react-hook-form';
import '../stylesLogin/Login.css';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitLogin = async (data) => {
    console.log(data.email);
    console.log(data.password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={logo} alt="" />
        <h1>NU Innovation Tech-Hub</h1>
        <p>Center for Innovation &amp; Entrepreneurship</p>

        <form onSubmit={handleSubmit(submitLogin)}>
          <label htmlFor="email-address" className="form-label-margin">
            Email Address
          </label>
          
          <input
            type="email"
            className="form-control"
            id="email-address"
            autoFocus
            {...register('email', { required: true, maxLength: 1000000 })}
          />
          <label htmlFor="password" className="form-label-margin">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register('password', { required: true, maxLength: 1000000 })}
          />
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          {/* <input className="btn btn-primary" type="submit" /> */}
        </form>
      </div>
      <div className="signup-form">
        <p>
          No account yet? <a href="#!"> Create an account.</a>
        </p>
      </div>
      <small>© 2021. All rights reserved</small>
    </div>
  );
}

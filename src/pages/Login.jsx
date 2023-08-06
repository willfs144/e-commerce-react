import { useFormik } from "formik";
import logo from "../assets/logos/logo_yard_sale.svg";
import "../styles/Login.scss";

const Login = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main>
      <div className="login">
        <div className="form-container">
          <img src={logo} alt="logo" className="logo" />
          <form
            autoComplete="off"
            action="/"
            className="form"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                type="text"
                id="email"
                autoFocus
                placeholder="agrifilandia@example.com"
                className="input input-email"
                name="email"
                required              
                onChange={handleChange}
              />
              {/* <p className='error'> valid email required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="input input-password"
                name="password"
                autoComplete="off"
                onChange={handleChange}
              />
              <p className="error"> password required</p>
            </fieldset>

            <input
              type="submit"
              value="Login"
              className="primary-button login-button"
            />
            <a href="/">Forgot my password?</a>
          </form>
          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </main>
  );
};

export default Login;

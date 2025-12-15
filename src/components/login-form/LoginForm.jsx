import useLoginForm from "../../hooks/useLoginForm";
import ValidateLoginForm from "../../utils/login-form";
import "./login-form.css";

const LoginForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  }

  const { errors, values, handleChange, handleSubmit } = useLoginForm(initialValues, ValidateLoginForm);

  return (
    <div className="login-form">
      <div className="form-container">
        <h2>Welcome to Job Finder</h2>
        <form onSubmit={handleSubmit} className="form-class">
          <div className="input-box">
            <input type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              placeholder="Name" />

            {errors.name && (
              <p>{errors.name}</p>
            )}
          </div>

          <div className="input-box">
            <input type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Email" />

            {errors.email && (
              <p>{errors.email}</p>
            )}
          </div>

          <div className="textarea-box">
            <textarea name="message"
              onChange={handleChange}
              value={values.message}
              placeholder="Type something...">
            </textarea>
            
            {errors.message && (
              <p>{errors.message}</p>
            )}
          </div>

          <button type="submit">Login</button>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;
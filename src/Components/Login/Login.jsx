import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "../common/FormControls/FormControls.module.css";
import classname from "classname";
import { login } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
const LoginForm = ({ login, isAuth, errorResponse }) => {
  const {
    register,
    handleSubmit,
    //setError,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { Login: "", Password: "" },
  });

  function onValid(data) {
    console.log(data.email, data.password, data.rememberMe); //setError);
    //Забрать данные из формы, отправить в авторизацию на бэк, забрать авторизацию с бэке, положить данные успешной авторизации в редакс
    login(data.email, data.password, data.rememberMe);
  }
  function onInvalid() {}

  const navigate = useNavigate();
  if (isAuth) {
    return navigate("/profile");
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <div className={styles.formControl}>
          <input
            className={classname(errors["email"] && styles.error)}
            {...register("email", {
              required: "This is required",
              minLength: { value: 4, message: "length is min 4" },
            })}
            placeholder={"Login"}
          />
          <p>{errors["Login"]?.message}</p>
        </div>
        <div className={styles.formControl}>
          <input
            className={classname(errors["password"] && styles.error)}
            {...register("password", {
              required: "This is required",
              minLength: { value: 4, message: "length is min 4" },
            })}
            type={"password"}
            placeholder={"Password"}
          />
          <p>{errors["password"]?.message}</p>
        </div>
        <div className={styles.formControl}>
          <input
            className={classname(errors["rememberMe"] && styles.error)}
            {...register("rememberMe")}
            type={"checkbox"}
          />{" "}
          remember me
          <p>{errors["Remember me"]?.message}</p>
        </div>

        {errorResponse && (
          <div className={styles.formSummeryError}>{errorResponse}</div>
        )}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  errorResponse: state.auth.error,
});
export default connect(mapStateToProps, { login })(LoginForm);

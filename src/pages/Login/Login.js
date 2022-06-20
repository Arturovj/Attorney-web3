import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputGroup from "../../components/InputGroup/InputGroup";
import * as yup from "yup";
import { login as loginRequest } from "../../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

function Login() {
  const { login } = useAuthContext();
  const [error, setError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/profile";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setError(undefined);
    setIsSubmitting(true);

    loginRequest(data)
      .then((response) => {
        console.log(response);
        login(response.access_token, () => navigate(from, { replace: true }));
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="Login">
      <>
        <div className="body">
          <div class="container">
            <div class="screen">
              <div class="screen__content">
                <form class="login" onSubmit={handleSubmit(onSubmit)}>
                  <div class="login__field">
                    <i class="login__icon fas fa-user"></i>
                    <InputGroup
                      id="email"
                      register={register}
                      error={errors.email?.message}
                      type="email"
                      placeholder="EMAIL"
                    />
                  </div>
                  <div class="login__field">
                    <i class="login__icon fas fa-lock "></i>
                    <InputGroup
                      id="password"
                      register={register}
                      error={error || errors.password?.message}
                      type="password"
                      placeholder="PASSWORD"
                    />
                  </div>
                  <button class="button login__submit">
                    <span class="button__text">Log In Now</span>
                    <i class="button__icon fas fa-chevron-right"></i>
                  </button>
                </form>
                <div class="social-login">
                  <h3>log in via</h3>
                  <div class="social-icons">
                    <a href="#" class="social-login__icon fab fa-instagram"></a>
                    <a href="#" class="social-login__icon fab fa-facebook"></a>
                    <a href="#" class="social-login__icon fab fa-twitter"></a>
                  </div>
                </div>
              </div>
              <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Login;

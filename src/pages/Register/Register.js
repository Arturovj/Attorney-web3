import React, { useState } from 'react';
import './Register.css'
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup"
import InputGroup from '../../components/InputGroup/InputGroup';
import * as yup from "yup";
import { register as registerRequest } from '../../services/AuthService'
import { useNavigate } from 'react-router-dom';


const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().min(9, 'Password need to be 9 characters length').required(),
}).required();




export default function SignUp() {
  const [backErrors, setBackErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState:{ errors}} = useForm({
    resolver: yupResolver(schema)
  });

const onSubmit = data => {
  setBackErrors({})
  setIsSubmitting(true)

  registerRequest(data)
  .then((user) => {
    navigate('/login')
  })
  .catch(err => {
    setBackErrors(err?.response?.data?.errors)
  })
  .finally(() => {
    setIsSubmitting(false)
  })

};

return( 
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
            error={backErrors?.email || errors.email?.message}
            type="email"
            placeholder="EMAIL"
          />
                </div>
                <div class="login__field">
           <InputGroup
            
            id="name"
            register={register}
            error={backErrors?.name || errors.name?.message}
            placeholder="NAME"
          />
          </div>
          <div class="login__field">
           <InputGroup
            
            id="password"
            register={register}
            error={backErrors?.password || errors.password?.message}
            type="password"
            placeholder="PASSWORD"
          />
                </div>
                <button class="button login__submit">
                  <span class="button__text">Register Now</span>
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
)

}


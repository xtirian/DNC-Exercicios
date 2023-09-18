import React, {useState} from "react";


//STYLE
import "./login.scss";
import Header from "../../components/sections/Header/Header";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Link } from "react-router-dom";

const Login = () => {
  const [passwordView, setPasswordView] = useState(false)  

  const showPassword = () => {

    if(passwordView === false){
      setPasswordView(true)
    } else{
      setPasswordView(false)
    }

  }

  
  return (
    <>
      <Header nav={false} />
      <div className="login-container">
        <div className="login-presentation">
          <p className="login-presentation-title">Acesse com seu login ou cadastre-se!</p>
          <p className="login-presentation-subtitle">você pode entrar com o seu CPF</p>
        </div>
        <form action="" className="login-form">
          <label>
            Digite seu CPF:
            <input type="number" name="CPF" placeholder="111.111.111-11" />
          </label>
          <label>
            Senha:
            <input
              type={passwordView? "text" : "password"}
              name="senha"
              placeholder="Digite sua senha"              
            />
            {passwordView? (<AiOutlineEyeInvisible color="#7a7a7a" width={20} height={20} className="password-icon" onClick={showPassword} />): (<AiOutlineEye color="#7a7a7a" width={20} height={20} className="password-icon" onClick={showPassword} />)}
          </label>
          <Link to={`/home`}>
          <button type="button">Enviar</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;

import {useState} from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { useNavigate } from "react-router";

function Auth() {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  function showLoginForm() {
    setShowLogin(true);
    setShowRegister(false);
  }

  function showRegisterForm() {
    setShowRegister(true);
    setShowLogin(false);
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="text-center my-4">
        <h1 className="font-bold text-2xl">Auth</h1>
      </div>

      { showLogin ?
        <>
          <div className="text-center my-2">
            <h2 className="font-bold text-lg">Connexion</h2>
          </div>
          <LoginForm onLogin={() => {navigate('/')}} /> 
          <p>Pas encore de compte ? <a className="underline cursor-pointer" onClick={() => {showRegisterForm()}}>S'inscrire</a></p>
        </>
       : null }
      { showRegister ?
        <>
          <div className="text-center my-2">
            <h2 className="font-bold text-lg">Inscription</h2>
          </div>
          <RegisterForm onRegister={() => {navigate('/')}} />
          <p>Déjà un compte ? <a className="underline cursor-pointer" onClick={() => {showLoginForm()}}>Se connecter</a></p>
        </>
      : null}
    </div>
  );
}

export default Auth;
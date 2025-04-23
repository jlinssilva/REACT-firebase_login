import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./FirebaseConfig";

import "../css/Login.css";

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado:", user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };
  return (
    <>
      { /*<h1>Login</h1>
      <p>Faça login para acessar o sistema</p>
      <p>Você deve usar sua conta do Google</p>*/ }
      <button onClick={handleLogin}>Entrar com Google</button>
    </>
  );
};

export default Login;
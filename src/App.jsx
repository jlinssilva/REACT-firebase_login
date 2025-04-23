import './assets/css/App.css'

/*LOGIN COM FIREBASE*/
import { useEffect, useState } from "react";
import { auth } from "./assets/componentes/FirebaseConfig";
import Login from "./assets/componentes/Login";
import Logout from "./assets/componentes/Logout";

function App() {
  // Verifica se o usuário está logado e atualiza o estado do usuário
  // com o hook useEffect e o hook useState
  // O hook useEffect é chamado quando o componente é montado
  // e quando o estado do usuário é atualizado
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      // Verifica se o usuário está logado
      // Se o usuário estiver logado, exibe o componente Logout
      // Se o usuário não estiver logado, exibe o componente Login
      {user ? <Logout user={user} /> : <Login />}
    </>
  )
}

export default App

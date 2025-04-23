import './assets/css/App.css'

/*LOGIN COM FIREBASE*/
import { useEffect, useState } from "react";
import { auth } from "./assets/componentes/FirebaseConfig";
import Login from "./assets/componentes/Login";
import Logout from "./assets/componentes/Logout";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? <Logout user={user} /> : <Login />}
    </>
  )
}

export default App

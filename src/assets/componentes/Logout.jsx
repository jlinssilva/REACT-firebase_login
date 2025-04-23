import { signOut } from "firebase/auth";
import { auth } from "./FirebaseConfig";

/*const Logout = ({ user }) => {*/
const Logout = () => {
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Usuário deslogado");
    });
  };
  return (
    <div>
      { /*<p>{user.displayName}</p>*/ }
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Logout;
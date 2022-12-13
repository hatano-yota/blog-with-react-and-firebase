import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: (isAuth: boolean) => void;
};

export const Logout = ({ setIsAuth }: Props) => {
  const navigate = useNavigate();
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>ホーム</Link>
      <Link to={"/createpost"}>記事投稿</Link>
      <Link to={"/login"}>ログイン</Link>
    </nav>
  );
};

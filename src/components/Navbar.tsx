import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  isAuth: boolean;
};

export const Navbar: FC<Props> = ({ isAuth }) => {
  return (
    <nav>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>

      {!isAuth ? (
        <Link to={"/login"}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
      ) : (
        <>
          <Link to={"/createpost"}>
            <FontAwesomeIcon icon={faFilePen} />
            記事投稿
          </Link>
          <Link to={"/logout"}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            ログアウト
          </Link>
        </>
      )}
    </nav>
  );
};

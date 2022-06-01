import { Link } from "react-router-dom";
import nomatch from "../styles/NoMatch.module.css";

function NoMatch() {
  return (
    <div className={nomatch.NoMatchContainer}>
      <div className={nomatch.ErrorWrap}>
        <p>Sorry, page not found!</p>
        <img src="./icons/notfound.svg" alt="Sad face"></img>
      </div>

      <div className={nomatch.BackWrap}>
        <img
          src="./icons/enter-back.svg"
          className={nomatch.BackIcon}
          alt="Return icon"
        ></img>
        <Link to="/" className={nomatch.BackText}>
          Return home
        </Link>
      </div>
    </div>
  );
}

export default NoMatch;

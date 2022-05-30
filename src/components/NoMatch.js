import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <p>NoMatch</p>
      <Link to="/"> home</Link>
    </div>
  );
}

export default NoMatch;

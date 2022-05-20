import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar activePage="home" />
      <h1>
        <FormattedMessage id="greeting" defaultMessage="Wild Orchid Webside" />
      </h1>
    </>
  );
}

export default Home;

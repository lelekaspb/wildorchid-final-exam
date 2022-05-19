import heading from "../styles/Heading.module.css";
import { FormattedMessage } from "react-intl";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar activePage="home" />
      <h1 className={heading.header}>
        <FormattedMessage id="greeting" defaultMessage="Wild Orchid Webside" />
      </h1>
    </>
  );
}

export default Home;

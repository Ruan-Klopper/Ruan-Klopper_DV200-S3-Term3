import "./navbar.css";
import { Link } from "react-router-dom";

const DesktopNav = ({ currentPage }) => {
  const SignedInNavCont = ({ userNmae }) => {
    return (
      <div>
        <Link
          to="/Account"
          className="DACCITEM"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          Hi {userNmae}
        </Link>
        <Link
          to="/SignIn"
          className="DACCITEM"
          style={{ textDecoration: "none" }}
        >
          Sign Out
        </Link>
      </div>
    );
  };

  return (
    <div className="DNavbody">
      <Link to="/Home" style={{ textDecoration: "none" }}>
        <div className="DLogoLeft">
          <div className="DICON"></div>
          <div className="DNAME">QueryQuorum</div>
        </div>
      </Link>
      <div className="DPage">{currentPage}</div>
      <div className="DAccountInfo">
        <div>
          <SignedInNavCont userNmae={"Ruan"} />
        </div>
        <div className="NavAccountPic"></div>
      </div>
    </div>
  );
};

function NavBar({ currentPage }) {
  return (
    <div className="NavGroup">
      <DesktopNav currentPage={currentPage} />
    </div>
  );
}

export default NavBar;

import "./global.css";
import "./postPage.css";
import NavBar from "../compoments/navbar";
import SideNav from "../compoments/sideNav";
import NotLoggedIn from "../compoments/NotLoggedIn";
const LoggedInContent = () => {
  return (
    <>
      <div className="postPageeRoot">
        <div className="postPageePosts"></div>
        <div className="postPageeGroup"></div>
      </div>
    </>
  );
};

function Post() {
  return (
    <div className="website">
      <div className="NavBarWrapper">
        <NavBar currentPage={"user_1234's post"} />
      </div>
      <div className="WebsiteContent">
        <div>
          <SideNav webPage={""} />
        </div>
        <div className="WebsiteRoot">
          <LoggedInContent />
        </div>
      </div>
    </div>
  );
}

export default Post;

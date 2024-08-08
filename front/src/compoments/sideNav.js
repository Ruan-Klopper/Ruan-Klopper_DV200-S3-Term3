import "./sideNav.css";
import { Link, useLocation } from "react-router-dom";

function SideNav({ webPage }) {
  const SNrecentPostItem = ({ postImageURL, postTitle }) => {
    return (
      <div className="SNrecentPostItemBody">
        <div
          className="SNrecentPostItemImage"
          style={{ backgroundImage: `url(${postImageURL})` }}
        ></div>
        <div className="SNrecentPostItemText">{postTitle}</div>
      </div>
    );
  };

  const SNgroupItem = ({ groupImageUrl, groupTitle }) => {
    return (
      <div className="SNgroupItemBody">
        <div
          className="SNgroupItemImage"
          style={{ backgroundImage: `url(${groupImageUrl})` }}
        ></div>
        <div className="SNgroupItemText">{groupTitle}</div>
      </div>
    );
  };

  return (
    <div className="SideNavBody">
      <div className="SNsplitterline"></div>
      <div className="SNnavs">
        <Link
          to="/Home"
          className={`SNnav ${webPage === "Home" ? "SNnavActive" : ""}`}
          style={{ textDecoration: "none" }}
        >
          <div className="SNnavIconH"></div>
          Home
        </Link>
        <Link
          to="/Account"
          className={`SNnav ${webPage === "Account" ? "SNnavActive" : ""}`}
          style={{ textDecoration: "none" }}
        >
          <div className="SNnavIconA"></div>
          Account
        </Link>
      </div>
      <div className="SNsplitterline"></div>
      <div className="SNrecentposts">
        <h5 style={{ paddingTop: "15px", textAlign: "center" }}>
          Recent posts
        </h5>
        <div className="SNrecentpostContainer">
          <SNrecentPostItem
            postImageURL={"../assets/test/test3.jpg"}
            postTitle={"How to connect ESP32 to 1.8 inch TFT display"}
          />
          <SNrecentPostItem
            postImageURL={"../assets/test/test1.webp"}
            postTitle={"How to connect ESP32 to 1.8 inch TFT display"}
          />
          <SNrecentPostItem
            postImageURL={"../assets/test/test2.jpeg"}
            postTitle={"How to connect ESP32 to 1.8 inch TFT display"}
          />
        </div>
      </div>
      <div className="SNsplitterline"></div>
      <Link to="/CreatePost" style={{ textDecoration: "none" }}>
        <div className="SNbuttonCreatePost">
          <div className="SNbuttonPlusIcon"></div>
          <div className="SNbuttonText">Create a post</div>
        </div>
      </Link>
      <Link to="/CreateGroup" style={{ textDecoration: "none" }}>
        <div className="SNbuttonCreateGroup">
          <div className="SNbuttonPlusIcon"></div>
          <div className="SNbuttonText">Create a group</div>
        </div>
      </Link>
      <div className="SNsplitterline"></div>
      <div className="SNgroups">
        <h5>Groups</h5>
        <div className="SNgroupsContainer">
          <SNgroupItem
            groupImageUrl={"../assets/test/test3.jpg"}
            groupTitle={"qq_adruino"}
          />
          <SNgroupItem
            groupImageUrl={"../assets/test/test1.webp"}
            groupTitle={"qq_samsung"}
          />
          <SNgroupItem
            groupImageUrl={"../assets/test/test2.jpeg"}
            groupTitle={"qq_geforce"}
          />
          <SNgroupItem
            groupImageUrl={"../assets/test/test3.jpg"}
            groupTitle={"qq_adruino"}
          />
          <SNgroupItem
            groupImageUrl={"../assets/test/test1.webp"}
            groupTitle={"qq_samsung"}
          />
          <SNgroupItem
            groupImageUrl={"../assets/test/test2.jpeg"}
            groupTitle={"qq_geforce"}
          />
          <SNgroupItem
            groupImageUrl={"../assets/test/test3.jpg"}
            groupTitle={"qq_adruino"}
          />
          <SNgroupItem
            groupImageUrl={"../assets/test/test1.webp"}
            groupTitle={"qq_samsung"}
          />
          <SNgroupItem
            groupImageUrl={"../assets/test/test2.jpeg"}
            groupTitle={"qq_geforce"}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;

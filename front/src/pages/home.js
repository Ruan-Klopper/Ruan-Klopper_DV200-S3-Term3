import React, { useState, useEffect } from "react";
import "./global.css";
import "./home.css";
import NavBar from "../compoments/navbar";
import SideNav from "../compoments/sideNav";
import PostItemLg from "../compoments/postItemLG";
import { Link } from "react-router-dom";

const HomeHotGroups = () => {
  const HomeHotGroupItem = ({ groupTitle, groupPhoto }) => {
    return (
      <div className="homeGroupItemBody">
        <div
          className="homeGroupItemPhoto"
          style={{ backgroundImage: `url(${groupPhoto})` }}
        ></div>
        <div className="homeGroupItemTitle">{groupTitle}</div>
      </div>
    );
  };
  return (
    <div className="homeHotGroups">
      <h1>Hot groups</h1>
      <div className="homeHotGroupsContainer">
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
        <HomeHotGroupItem
          groupTitle={"qq_arduino"}
          groupPhoto={"../assets/test/test1.webp"}
        />
      </div>
    </div>
  );
};

function Home() {
  const [showHotGroups, setShowHotGroups] = useState(window.innerWidth >= 1300);

  useEffect(() => {
    const handleResize = () => {
      setShowHotGroups(window.innerWidth >= 1300);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="website">
      <div className="NavBarWrapper">
        <NavBar currentPage={"Home"} />
      </div>
      <div className="WebsiteContent">
        <div>
          <SideNav webPage={"Home"} />
        </div>
        <div className="WebsiteRoot">
          <div className="homeContainer">
            <div className="homeHeader">
              <div className="homeHeaderHeader">
                <div className="homeHeaderContentWrapper">
                  <h1>Hi [username] Start the conversation</h1>
                  <h4>
                    Ask questions and discuss issues and get solutions! STAY
                    CURIOUS
                  </h4>
                  <Link to="/CreatePost" style={{ textDecoration: "none" }}>
                    <button className="redButton">Create post</button>
                  </Link>

                  <div className="homeHeaderStatsContainer">
                    <div className="homeStatItem">
                      <div className="homeStatHeading">689k</div>
                      <div className="homeStatsubHeading">Groups</div>
                    </div>
                    <div className="homeStatItem">
                      <div className="homeStatHeading">134k</div>
                      <div className="homeStatsubHeading">Posts</div>
                    </div>
                    <div className="homeStatItem">
                      <div className="homeStatHeading">12k</div>
                      <div className="homeStatsubHeading">Members</div>
                    </div>
                  </div>
                </div>
                <div className="homeHeaderImage"></div>
              </div>
            </div>
            <div className="homeHotDiscussionsCont">
              <div className="homeHotDiscussions">
                <h3>🔥 Hot discussions 🔥</h3>
                <div className="homeHotDiscussionsPostCont">
                  <div className="homePostWrapper">
                    <PostItemLg
                      tempUser={"user_1234"}
                      tempUserImgUrl={"../assets/test/test1.webp"}
                      tempImage={"../assets/test/test2.jpeg"}
                      tempTitle={"first post"}
                      tempReply={"24"}
                      tempSaves={"43"}
                      tempViews={"12"}
                      tempGroup={"qq_arduino"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="homeSplitterLine"></div>
            <div className="homePostContWrapper">
              <div className="homePostContainer">
                <div className="homeRecentPosts">
                  <div className="homePostBottomWrapper">
                    <PostItemLg
                      tempUser={"user_1234"}
                      tempUserImgUrl={"../assets/test/test1.webp"}
                      tempImage={"../assets/test/test2.jpeg"}
                      tempTitle={"How to connect 1.8inch tft to ESP32"}
                      tempReply={"24"}
                      tempSaves={"43"}
                      tempViews={"12"}
                      tempGroup={"qq_arduino"}
                    />
                  </div>
                </div>
                {/* Display homeHotgroups when display width is wider than 849px */}
                <div className="homeHotGroupsContainerH">
                  {showHotGroups && <HomeHotGroups />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

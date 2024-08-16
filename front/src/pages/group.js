import "./global.css";
import "./group.css";
import NavBar from "../compoments/navbar";
import SideNav from "../compoments/sideNav";
import PostItemLg from "../compoments/postItemLG";
import NotLoggedIn from "../compoments/NotLoggedIn";

const MemberItem = ({ memberImg, memberName }) => {
  return (
    <div className="groupMemberItemBody">
      <div
        className="groupMemberItemImg"
        style={{ backgroundImage: `url(${memberImg})` }}
      ></div>
      <div className="groupMemberItemName">{memberName}</div>
    </div>
  );
};

const LoggedInContent = () => {
  const posts = Array.from({ length: 5 }, (_, index) => index);
  return (
    <>
      <div className="groupPageRoot">
        <div className="groupPageRoot">
          <div
            className="groupPageBanner"
            style={{ backgroundImage: `url(../assets/test/bg1.jpeg)` }}
          >
            <div className="groupPageBannerOverlay">
              <div className="groupPageBannerInfo">
                <div className="groupPageBannerNameGroup">
                  <div
                    className="groupPageBannerGroupPic"
                    style={{ backgroundImage: `url(../assets/test/bg1.jpeg)` }}
                  ></div>
                  <div className="groupPageBannerName">qq_fx5800ultra</div>
                </div>
                <div className="groupPageBannerStats">
                  <div className="groupPageBannerStatGroup">
                    <div className="groupPageBannerStatTop">290</div>
                    <div className="groupPageBannerStatBottom">Posts</div>
                  </div>
                  <div className="groupPageBannerStatGroup">
                    <div className="groupPageBannerStatTop">32</div>
                    <div className="groupPageBannerStatBottom">Members</div>
                  </div>
                  <div className="groupPageBannerStatGroup">
                    <div className="groupPageBannerStatTop">2k</div>
                    <div className="groupPageBannerStatBottom">views</div>
                  </div>
                </div>
                <div>
                  <button className="groupPageBannerButton">Join</button>
                </div>
              </div>
            </div>
          </div>

          <div className="groupPageContent">
            <div className="groupPageContentLeft">
              <h1>Recent posts</h1>

              {posts.map((index) => (
                <div key={index} className="groupRecentPagePostWrapper">
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
              ))}

              <h1>Hot posts</h1>

              {posts.map((index) => (
                <div key={index} className="groupRecentPagePostWrapper">
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
              ))}
            </div>
            <div className="groupPageContentRight">
              <div className="groupDetailsBody">
                <div
                  className="groupDetailsImage"
                  style={{ backgroundImage: `url(../assets/test/bg1.jpeg)` }}
                >
                  <div className="groupDetailsImageOverlay">
                    <div className="groupDetailsName">qq_fx5800ultra</div>
                  </div>
                </div>
                <div className="groupDetailsContent">
                  <div className="groupDetailsContentText">
                    Group description: asfasfsfdsadadasdad
                  </div>
                  <div className="groupDetailsContentText">
                    Group rules: asfasfsfdsadadasdad
                  </div>
                </div>
              </div>
              <div className="groupDetailsMembersBody">
                <h4>Group members</h4>
                <div className="groupDetailsMembersContainer">
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                  <MemberItem
                    memberName={"user_1234"}
                    memberImg={"../assets/test/test2.jpeg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Group() {
  return (
    <div className="website">
      <div className="NavBarWrapper">
        <NavBar />
      </div>
      <div className="WebsiteContent">
        <div>
          <SideNav currentPage={"Group: arduino"} />
        </div>
        <div className="WebsiteRoot">
          <LoggedInContent />
        </div>
      </div>
    </div>
  );
}

export default Group;

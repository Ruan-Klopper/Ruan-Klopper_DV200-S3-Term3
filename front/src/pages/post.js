import "./global.css";
import "./post.css";
import NavBar from "../compoments/navbar";
import SideNav from "../compoments/sideNav";
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

const MainPost = ({
  userProfilePic,
  userName,
  postCreationDate,
  postTitle,
  postDescription,
  postImage,
  postLikes,
  postComments,
  postSaves,
}) => {
  // HI SIR
  // i am going to the toilet quickly, 2min
  return (
    <>
      <div className="mainPostBody">
        <div className="mainPostTopGroup">
          <div
            className="mainPostUserProfilePic"
            style={{ backgroundImage: `url(${userProfilePic})` }}
          ></div>
          <div className="mainPostUserProfileName">{userName}</div>
          <div className="mainPostCreationDate">{postCreationDate}</div>
        </div>
        <div className="mainPostTitle">{postTitle}</div>
        <div className="mainPostDescription">{postDescription}</div>
        <div
          className="mainPostImage"
          style={{ backgroundImage: `url(${postImage})` }}
        ></div>
        <div className="mainPostBottomGroup">
          <div style={{ display: "flex" }}>
            <button className="mainPostLikes">
              <div className="mainPostLikesIcon"></div>
              <div>{postLikes}</div>
            </button>
            <button className="mainPostComments">
              <div className="mainPostCommentsIcon"></div>
              <div>{postComments}</div>
            </button>
          </div>
          <div>
            <button className="mainPostSaves">
              <div className="mainPostSavesIcon"></div>
              <div>{postSaves}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const PostComment = ({
  commentUserImg,
  commentUserName,
  commentDateAdded,
  commentContent,
  commentLikes,
  commentRelies,
}) => {
  return (
    <div className="commentBody">
      <div>
        <div className="commentWrapper">
          <div className="commentTopGroup">
            <div
              className="commentUserImg"
              style={{ backgroundImage: `url(${commentUserImg})` }}
            ></div>
            <div className="commentUserName">{commentUserName}</div>
            <div className="commentDateAdded">{commentDateAdded}</div>
          </div>
          <div className="commentContent">{commentContent}</div>
          <div className="commentBottomGroup">
            <button className="mainPostLikes">
              <div className="mainPostLikesIcon"></div>
              <div>{commentLikes}</div>
            </button>
            <button className="mainPostComments">
              <div className="mainPostCommentsIcon"></div>
              <div>{commentRelies}</div>
            </button>
          </div>
        </div>

        <div className="commentAddContainer"></div>
        <div className="commentReply">
          <div className="commentSideStripe"></div>
          <div className="commentRelyContainer">
            {/* Nested reply go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

const AddCommentBox = () => {
  return (
    <div className="addCommentBody">
      <textarea
        className="addCommentInput"
        placeholder="Type here..."
        type="text"
      ></textarea>
      <div className="addCommentSplitter"></div>
      <div className="addCommentBTNgroup">
        <button className="addCommentCancel">Cancel</button>
        <button className="addCommentAdd">Comment</button>
      </div>
    </div>
  );
};

const LoggedInContent = () => {
  const posts = Array.from({ length: 5 }, (_, index) => index);
  return (
    <>
      <div className="postPageRoot">
        <div className="postPageContent">
          <div className="postPageContentLeft">
            <MainPost
              userProfilePic={"../assets/test/bg1.jpeg"}
              userName={"user_1234"}
              postTitle={"GeForce FX5800 Ultra"}
              postCreationDate={"29 November 2005"}
              postDescription={
                "The quick brown fox jumps over the lazy dog,asdfkjlsakdjhfasdhflkhsadkljfh kasdfkj dsf skdjhfjksdhf  dsakjhfkjsdfk skdjfksdjfkdjf"
              }
              postImage={"../assets/test/bg1.jpeg"}
              postLikes={"22"}
              postComments={"4"}
              postSaves={"25"}
            />
            <h3 className="postPageAddCommentTop">Add a cooment</h3>
            <AddCommentBox />
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
          {/* Width same as combined items above */}
        </div>
        <div className="postPageComments">
          <h3 className="commentsHeaderH3">Answers</h3>
          <PostComment
            commentUserImg={"../assets/test/test2.jpeg"}
            commentUserName={"user_1234"}
            commentDateAdded={"2 Jan 2006"}
            commentContent={"Hi, please go follow this link"}
            commentLikes={"2"}
            commentRelies={"4"}
          />
        </div>
      </div>
    </>
  );
};

function Post() {
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

export default Post;

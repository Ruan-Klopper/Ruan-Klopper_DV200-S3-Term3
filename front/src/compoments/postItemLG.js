import "./postitem.css";

function PostItemLg({
  linkTo,
  postID,
  tempTitle,
  tempUser,
  tempUserImgUrl,
  tempReply,
  tempViews,
  tempGroup,
  tempSaves,
  tempImage,
}) {
  return (
    <div className="postItemBody">
      <div className="postConentTop">
        <div className="postTopGroup">
          <div className="postUserProfile">
            <div
              className="postUserProfileImage"
              style={{ backgroundImage: `url(${tempUserImgUrl})` }}
            ></div>
            <div className="postUserProfileName">{tempUser}</div>
          </div>
          <button className="postSave">
            <div className="postSaveIcon"></div>
          </button>
        </div>
        <div className="postTitle">{tempTitle}</div>
        <div className="postBottomGroup">
          <div className="postBottomGroupLeft">
            <div className="postRepliesGroup">
              <div className="postReplyIcon"></div>
              <div className="postReplyAmount">{tempReply} Relies</div>
            </div>
            <div className="postLeftOther">
              {tempViews} views, {tempSaves} saves
            </div>
          </div>
          <div className="postBottomGroupRight">
            <div>{tempGroup}</div>
            <button className="postViewgroup">View</button>
          </div>
        </div>
      </div>

      <div
        className="postImage"
        style={{ backgroundImage: `url(${tempImage})` }}
      ></div>
    </div>
  );
}

export default PostItemLg;

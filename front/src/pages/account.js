import "./global.css";
import "./account.css";
import NavBar from "../compoments/navbar";
import SideNav from "../compoments/sideNav";
import NotLoggedIn from "../compoments/NotLoggedIn";

const AccountLoggedIn = () => {
  return (
    <>
      <div
        className="accountHeader"
        style={{ backgroundImage: `url(../assets/test/bg1.jpeg)` }}
      >
        <div className="accountHeaderOverlay">
          <div
            className="accUserProfileImg"
            style={{ backgroundImage: `url(../assets/test/bg1.jpeg)` }}
          ></div>
          <div className="accUsernameGroup">
            <div className="accHeaderUsername">user_1234</div>
            <div className="accHeaderFullname">Ruan Klopper</div>
          </div>
        </div>
      </div>
      <div className="accountContent">
        <div className="accContUserPostCont">
          <div className="accContSplitterLine"></div>
          <div className="accContButtonTabsGroup">
            <button className="accCBtn accCBtnActive">Posts</button>
            <button className="accCBtn">Saved</button>
            <button className="accCBtn">Groups</button>
          </div>
          <div className="accContentContainer"></div>
        </div>
        <div className="accContUserInfoCont">
          <div className="accContUIuserCard">
            <div
              className="accContCardBanner"
              style={{ backgroundImage: `url(../assets/test/bg1.jpeg)` }}
            >
              <div className="accContCardBannerOverlay">
                <div>
                  <button className="accContLogoutBtn">Logout</button>
                </div>

                <div className="accContCardWrapper">
                  <div className="accContCardDataWrapper">
                    <div className="accContCardData">
                      <div className="accContCardDataTop">32</div>
                      <div className="accContCardDataBottom">Groups</div>
                    </div>
                    <div className="accContCardData">
                      <div className="accContCardDataTop">290</div>
                      <div className="accContCardDataBottom">Posts</div>
                    </div>
                  </div>
                  <div
                    className="accContCardPP"
                    style={{
                      backgroundImage: `url(../assets/test/bg1.jpeg)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="accContCardBottomWrapper">
              <div className="accContCardBottomFullname">Ruan Klopper</div>
              <div className="accContCardBottomOther">
                I like interesting things
              </div>
              <div className="accContCardBottomOther">Joined in March 2007</div>
            </div>
          </div>
          <div className="accContUIupdateUserInfo">
            <form action="" className="accContUIupdateUserInfoForm">
              <h3>Update your info</h3>
              {/* If an item is left blank it should not update it, but should be processed in the backend */}
              <div className="signInFormGroup">
                <label>Name:</label>
                <input type="text" className="SignInInput" />
              </div>
              <div className="signInFormGroup">
                <label>Surname:</label>
                <input type="text" className="SignInInput" />
              </div>
              <div className="signInFormGroup">
                <label>Username:</label>
                <input type="text" className="SignInInput" />
              </div>
              <div className="signInFormGroup">
                <label>Bio:</label>
                <input type="text" className="SignInInput" />
              </div>
              <div className="signInFormGroup">
                <label>Email:</label>
                <input type="email" className="SignInInput" />
              </div>
              <div className="signInFormGroup">
                <label>Password:</label>
                <input type="password" className="SignInInput" />
              </div>
              <div className="signInButtonGroup">
                <button className="siginSubmit" type="submit">
                  Save
                </button>
                <button className="siginOther" type="reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

function Account() {
  return (
    <div className="website">
      <div className="NavBarWrapper">
        <NavBar currentPage={"Account"} />
      </div>
      <div className="WebsiteContent">
        <div>
          <SideNav webPage={"Account"} />
        </div>
        <div className="WebsiteRoot">
          <AccountLoggedIn />
        </div>
      </div>
    </div>
  );
}

export default Account;

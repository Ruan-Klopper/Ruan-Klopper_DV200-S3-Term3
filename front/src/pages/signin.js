import "./global.css";
import "./signin.css";
import { Link, useLocation } from "react-router-dom";

function SignIn() {
  return (
    <div className="website">
      <div className="WebsiteContentNoNav">
        <div className="WebsiteRootSignIn">
          <div className="WebsiteRootSignInBG">
            <div className="SignInFormBody">
              <h3>Sign In Form</h3>
              <form action="">
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
                    Sign In
                  </button>
                  <button className="siginOther" type="reset">
                    Reset
                  </button>
                  <button className="siginOther" type="button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

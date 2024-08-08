import React, { useState, useRef } from "react";
import "./global.css";
import "./createItem.css";
import NavBar from "../compoments/navbar";
import SideNav from "../compoments/sideNav";
import NotLoggedIn from "../compoments/NotLoggedIn";

const LoggedInContent = () => {
  const [groupProfileImage, setGroupProfileImage] = useState(null);
  const [groupProfileImageURL, setGroupProfileImageURL] = useState("");
  const [groupBannerImage, setGroupBannerImage] = useState(null);
  const [groupBannerImageURL, setGroupBannerImageURL] = useState("");

  const titleInputRef = useRef(null);
  const descriptionRef = useRef(null);
  const rulesRef = useRef(null);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGroupProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
      setGroupProfileImageURL(file.name);
    }
  };

  const handleBannerImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGroupBannerImage(e.target.result);
      };
      reader.readAsDataURL(file);
      setGroupBannerImageURL(file.name);
    }
  };

  const handleReset = () => {
    // Clear all inputs
    titleInputRef.current.value = "";
    descriptionRef.current.value = "";
    rulesRef.current.value = "";
    // Clear all image states
    setGroupProfileImage(null);
    setGroupProfileImageURL("");
    setGroupBannerImage(null);
    setGroupBannerImageURL("");
  };

  return (
    <>
      <div className="groupRoot">
        <div className="groupFormRoot">
          <h1>Create a group</h1>

          <form action="">
            <div className="groupFormGroup">
              <label>GroupTitle:</label>
              <input ref={titleInputRef} type="text" className="groupInput" />
            </div>
            <div className="groupFormGroup">
              <label>Group description:</label>
              <textarea ref={descriptionRef} type="text" className="groupTA" />
            </div>
            <div className="groupFormGroup">
              <label>Group rules:</label>
              <textarea ref={rulesRef} type="text" className="groupTA" />
            </div>

            <div className="groupFormGroup">
              <div className="groupFormImageInputGroup">
                <div className="groupFormImg">
                  <div style={{ width: "150px" }}>
                    <label className="groupFormImgLabel">Group profile:</label>
                    <div className="groupImageInput">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                        style={{ display: "none" }}
                        id="profileImageUpload"
                      />
                      <div
                        className="groupImageInputImageDisplay"
                        onClick={() =>
                          document.getElementById("profileImageUpload").click()
                        }
                        style={{
                          backgroundImage: groupProfileImage
                            ? `url(${groupProfileImage})`
                            : "none",
                        }}
                      >
                        {!groupProfileImage && (
                          <div className="groupImageInputNoImage">
                            Click to select image
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="groupFormImageSource">
                    <h5>{groupProfileImageURL || "No image selected"}</h5>
                  </div>
                </div>
                <div className="groupFormImg">
                  <div style={{ width: "150px" }}>
                    <label className="groupFormImgLabel">Group banner:</label>
                    <div className="groupImageInput">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleBannerImageChange}
                        style={{ display: "none" }}
                        id="bannerImageUpload"
                      />
                      <div
                        className="groupImageInputImageDisplay"
                        onClick={() =>
                          document.getElementById("bannerImageUpload").click()
                        }
                        style={{
                          backgroundImage: groupBannerImage
                            ? `url(${groupBannerImage})`
                            : "none",
                        }}
                      >
                        {!groupBannerImage && (
                          <div className="groupImageInputNoImage">
                            Click to select image
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="groupFormImageSource">
                    <h5>{groupBannerImageURL || "No image selected"}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="groupButtonGroup">
              <button className="groupSubmit" type="submit">
                Create
              </button>
              <button
                className="groupOther"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function CreateGroup() {
  return (
    <div className="website">
      <div className="NavBarWrapper">
        <NavBar currentPage={"Create group"} />
      </div>
      <div className="WebsiteContent">
        <div>
          <SideNav webPage={""} />
        </div>
        <div className="WebsiteRoot">
          <div className="createItemRoot">
            <LoggedInContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;

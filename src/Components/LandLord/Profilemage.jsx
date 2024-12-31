import React, { useState } from "react";
import user from "../../assets/imgs/user.jpg";
import { FiEdit } from "react-icons/fi";

function ProfileImage() {
  const [img, setImg] = useState();
  return (
    <div className="profile-img d-flex justify-content-center align-items-center flex-column my-4">
      <label htmlFor="upload" className="d-flex flex-column align-items-center justify-content-center" style={{ cursor: "pointer" }}>
      <img
        src={img ? URL.createObjectURL(img) : user}
        alt="user-img"
        className="mb-3"
      />
        <span>Edit Image <FiEdit style={{ color: "#5570f1" }} /></span>
      </label>
      <input
        type="file"
        id="upload"
        onChange={(e) => setImg(e.target.files[0])}
        className="d-none"
      />
    </div>
  );
}

export default ProfileImage;

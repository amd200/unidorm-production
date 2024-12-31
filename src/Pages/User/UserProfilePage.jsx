import React, { useContext, useEffect, useState } from "react";
import ProfileImage from "../../Components/User/Profilemage";
import MenuProfile from "../../Components/User/MenuProfile";
import PaymentMethods from "../../Components/User/PaymentMethods";
import PersonalInfo from "../../Components/User/PersonalInfo";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/profileAction";
import { DangerBtn, PrimaryBtn, SecondaryBtn } from "../../Components/Ui/Buttons";
import { UserContext } from "../../context/useContext";
import { Skeleton } from "@mui/material";
import notify from "../../hook/useNotifaction";

function UserProfilePage() {
  const { user, updateUserInLocalStorage } = useContext(UserContext);
  const [profile, setProfile] = useState();
  useEffect(() => {
    if (user) setProfile(user);
  }, [user]);
  const dispatch = useDispatch();
  const handleInputChange = (field, value) => {
    setProfile((prevUser) => ({ ...prevUser, [field]: value }));
  };

  const handleSubmit = (e) => {
    dispatch(updateUser(user.userId, profile));
    updateUserInLocalStorage(profile);
    notify("Profile updated successfully", "success");
  };
  if (!profile) {
    return (
      <div className="container">
        <Skeleton variant="text" width="60%" height={30} className="mb-2" />
        <Skeleton variant="text" width="50%" height={20} className="mb-3" />
        <Skeleton variant="text" width="70%" height={20} className="mb-3" />
        <Skeleton variant="rectangular" width="100%" height={200} className="mb-4" />
      </div>
    );
  }
  return (
    <main className="profileUser-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <MenuProfile />
          </div>
          <div className="col-lg-10">
            <div className="col-lg-8 d-flex align-items-center justify-content-between ms-auto ps-4">
              <div className="d-flex gap-2  ps-5">
                <DangerBtn title={"Cancel"} to={"#"} />
                <PrimaryBtn title={"Save Changes"} onClick={handleSubmit} to={"#"} />
              </div>
              <SecondaryBtn title={"View As Student"} />
            </div>
            {user && (
              <>
                <ProfileImage />
                <PersonalInfo user={profile} handleInputChange={handleInputChange} />
                <PaymentMethods />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserProfilePage;

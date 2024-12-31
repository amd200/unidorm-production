import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, updateUser, updatProfile } from "../../redux/actions/profileAction";
import notify from "../../hook/useNotifaction";
import { UserContext } from "../../context/useContext";

function useUpdateProfile() {
  const { user, updateUserInLocalStorage } = useContext(UserContext);
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profileReducer.profile);
  const [selectedFile, setSelectedFile] = useState();

  // set data(localStorage Date) from contenxt in state profile
  useEffect(() => {
    setProfile(user);
  }, [user]);

  // set data form contenxt in state profile and save old data in state profile
  const handleInputChange = (field, value) => {
    setProfile((prevUser) => ({ ...prevUser, [field]: field == "profilePicture" ? URL.createObjectURL(value) : value }));
    if (field == "profilePicture") {
      setSelectedFile(URL.createObjectURL(value));
    }
  };
  const isProfileChanged = () => {
    return JSON.stringify(profile) == JSON.stringify(user);
  };
  const handleSubmit = async (e) => {
    if (isProfileChanged()) {
      notify("No changes detected in the profile", "warning");
      return;
    }
    await dispatch(updatProfile(profile.userId, profile));
    setLoading(false);
    updateUserInLocalStorage(profile);
  };

  const handleCancel = () => {
    setProfile(user);
  };
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  useEffect(() => {
    if (loading === false) {
      if (data && data.status == 200) {
        notify("Profile updated successfully", "success");
      } else {
        notify("Error while updating profile", "warning");
      }
    }
  }, [loading, data]);
  return [profile, handleInputChange, handleSubmit, selectedFile, handleCancel];
}

export default useUpdateProfile;

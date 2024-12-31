import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions/profileAction";
import notify from "../../hook/useNotifaction";

function useUpdateProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profileImage, setProfileImage] = useState(user.profilePicture);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.profileReducer.profile);
}

export default useUpdateProfile;

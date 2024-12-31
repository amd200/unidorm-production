import React, { useEffect, useState } from "react";
import saly2 from "../../assets/imgs/Saly-2.svg";
import { Input } from "../../Components/Ui/Fields";
import { PrimaryBtn } from "../../Components/Ui/Buttons";
import notify from "../../hook/useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { create } from "@mui/material/styles/createTransitions";
import { createNewUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import useChangeTitle from "../../hook/useChangeTitle";
function SignUpPage() {
  useChangeTitle("Sign Up | تسجيل حساب جديد");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.authReducer.createUser);
  const navigate = useNavigate();

  const onchangeName = (e) => {
    setName(e.target.value);
  };
  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onchangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onchangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onchangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, password, confirmPassword);
    if (password !== confirmPassword) {
      notify("Passwords do not match", "error");
      return;
    }
    if (name === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
      notify("Please fill all fields", "error");
      return;
    }
    const formDate = new FormData();
    formDate.append("name", name);
    formDate.append("email", email);
    formDate.append("phoneNumber", phone);
    formDate.append("password", password);
    formDate.append("bio", "");
    formDate.append("profilePicture", "");
    await dispatch(createNewUser(formDate));
    setLoading(false);
  };

  useEffect(() => {
    if (loading == false) {
      if (res && res.status == 201) {
        localStorage.setItem("email", email);
        notify(res.data.message, "success");
        setTimeout(() => {
          navigate("/verify-email");
        }, 1500);
      } else {
        notify(res.data.msg, "error");
      }
    }
  }, [loading, res]);
  return (
    <main className="auth-page">
      <div className="container">
        <img src={saly2} className="mx-auto avatar-form  d-block" alt="" />
        <form onSubmit={onSubmit}>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-auth bg-white form rounded p-4 my-5 bg-white">
                <h3 className="mb-4">Create your account</h3>
                <Input customClass={"mb-4"} type={"text"} value={name} onChange={onchangeName} placeholder={"Name"} />
                <Input customClass={"mb-4"} type={"email"} value={email} onChange={onchangeEmail} placeholder={"Email"} />
                <Input customClass={"mb-4"} type={"number"} value={phone} onChange={onchangePhone} placeholder={"Phone Number"} />
                <Input customClass={"mb-4"} type={"password"} value={password} onChange={onchangePassword} placeholder={"Password"} />
                <Input customClass={"mb-4"} type={"password"} value={confirmPassword} onChange={onchangeConfirmPassword} placeholder={"confirm passoword"} />
                <PrimaryBtn customClass="w-100" isSubmit={true} title="Create account" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignUpPage;

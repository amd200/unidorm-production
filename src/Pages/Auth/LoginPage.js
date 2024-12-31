import React, { useContext, useEffect, useState } from "react";
import saly2 from "../../assets/imgs/Saly-2.svg";
import { json, NavLink, useNavigate } from "react-router-dom";
import { Input } from "../../Components/Ui/Fields";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotifaction";
import { PrimaryBtn } from "../../Components/Ui/Buttons";
import { loginUser } from "../../redux/actions/authAction";
import { UserContext } from "../../context/useContext";
import useChangeTitle from "../../hook/useChangeTitle";
function LoginPage() {
  useChangeTitle("Login | تسجيل الدخول");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.authReducer.loginUser);
  const { user, updateUserInLocalStorage } = useContext(UserContext);
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser({ email, password }));
    setLoading(false);
  };
  useEffect(() => {
    console.log(loading);
    if (loading == false) {
      if (res && res.status == 200) {
        notify("Login Successfully", "success");
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setLoading(true);
        setTimeout(() => {
          navigate("/");
          updateUserInLocalStorage(res.data.user);
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
                <h3 className="mb-4">Sign In</h3>
                <Input type={"text"} customClass={"mb-4"} value={email} onChange={onChangeEmail} placeholder={"Academic Email"} />
                <Input type={"password"} customClass={"mb-4"} value={password} onChange={onChangePassword} placeholder={"Password"} />
                <NavLink to="#">Forget password ?</NavLink>
                <PrimaryBtn customClass="w-100 mt-2" isSubmit={true} title="Sign In" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;

import React, { useEffect, useState } from "react";
import saly2 from "../../assets/imgs/Saly-2.svg";
import { Input } from "../../Components/Ui/Fields";
import { PrimaryBtn } from "../../Components/Ui/Buttons";
import notify from "../../hook/useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { create } from "@mui/material/styles/createTransitions";
import { createNewUser, vertifyEmail } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
function VertifyEmailPage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.authReducer.vertifyEmail);
  const navigate = useNavigate();

  const onchangeCode = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (code == "") {
      notify("Please fill  field", "error");
      return;
    }

    await dispatch(vertifyEmail({ email: localStorage.getItem("email"), token: code }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading == false) {
      console.log(res);
      if (res && res.status == 200) {
        notify(res.data.message, "success");
        navigate("/login");
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
                <h3 className="mb-4">Verify Email</h3>
                <Input customClass="mb-4" type={"number"} value={code} onChange={onchangeCode} placeholder={"Enter Verification Code"} />
                <PrimaryBtn customClass="w-100" isSubmit={true} title="Create account" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default VertifyEmailPage;

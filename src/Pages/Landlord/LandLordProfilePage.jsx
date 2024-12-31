import React from "react";
import MenuProfile from "../../Components/LandLord/MenuProfile";
import ProfileImage from "../../Components/LandLord/Profilemage";
import PersonalInfo from "../../Components/LandLord/PersonalInfo";
import PaymentMethods from "../../Components/LandLord/PaymentMethods";
import { DangerBtn, PrimaryBtn, SecondaryBtn } from "../../Components/Ui/Buttons";

function LandLordProfilePage() {
  return (
    <main className="profileUser-page mb-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <MenuProfile />
          </div>
          <div className="col-lg-10">
            <div className="col-lg-8 d-flex align-items-center justify-content-between ms-auto ps-4">
              <div className="d-flex gap-2  ps-5">
                <DangerBtn title={"Cancel"} to={"#"} />
                <PrimaryBtn title={"Save Changes"}  to={"#"} />
              </div>
              <SecondaryBtn title={"View As Student"} />
            </div>
            <ProfileImage />
            <PersonalInfo />
            <PaymentMethods />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LandLordProfilePage;

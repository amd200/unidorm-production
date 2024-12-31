import React from "react";
import MenuProfile from "../../Components/LandLord/MenuProfile";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import RecentRequests from "../../Components/User/RecentRequests";
import RecentBookings from "../../Components/User/RecentBookings";
import { SecondaryBtn } from "../../Components/Ui/Buttons";
import CardInfo from "../../Components/Shared/CardInfo";
function LandLordDashboardPage() {
  return (
    <div className="dashboard-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 mb-lg-0 mb-5">
            <MenuProfile />
          </div>
          <div className="col-lg-10 d-flex flex-column gap-5">
            <SecondaryBtn customClass={"ms-auto"} title={"Add Listing"} />
            <div className="row">
              <div className="col-lg-6">
                <CardInfo />
              </div>
              <div className="col-lg-6">
                <CardInfo />
              </div>
            </div>
            <RecentRequests />
            <RecentBookings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandLordDashboardPage;

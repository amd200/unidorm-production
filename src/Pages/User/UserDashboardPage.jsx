import React from "react";
import MenuProfile from "../../Components/User/MenuProfile";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import RecentRequests from "../../Components/User/RecentRequests";
import RecentBookings from "../../Components/User/RecentBookings";
import CardInfo from "../../Components/Shared/CardInfo";
function UserDashboardPage() {
  return (
    <div className="dashboard-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 mb-lg-0 mb-5">
            <MenuProfile />
          </div>
          <div className="col-lg-10 d-flex flex-column gap-5">
            <div className="row">
              <div className="col-lg-6">
                <CardInfo />
              </div>
              <div className="col-lg-6">
                {/* <CardInfo /> */}
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

export default UserDashboardPage;

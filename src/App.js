import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Uitily/Header";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Uitily/Footer";
import PropertiesPage from "./Pages/Properties/PropertiesPage";
import BookingPropertyPage from "./Pages/BookingProperty/BookingPropertyPage";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import DetailsPropertiesPage from "./Pages/DetailsProperties/DetailsPropertiesPage";
import React from "react";
import LoginPage from "./Pages/Auth/LoginPage";
import SignUpPage from "./Pages/Auth/SignUpPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import UserRequsetsPage from "./Pages/User/UserRequsetsPage";
import LandLordDashboardPage from "./Pages/Landlord/LandLordDashboardPage";
import LandLordProfilePage from "./Pages/Landlord/LandLordProfilePage";
import LandLordAddPropertiesPage from "./Pages/Landlord/LandLordAddPropertiesPage";
import UserWishlistPage from "./Pages/User/UserWishlistPage";
import UserDashboardPage from "./Pages/User/UserDashboardPage";
import UserBookingsPage from "./Pages/User/UserBookingsPage";
import UserAddListingPage from "./Pages/User/UserAddListingPage";
import { ToastContainer } from "react-toastify";
import VertifyEmailPage from "./Pages/Auth/VerifyEmailPage";
import ScrollToTop from "./Components/Uitily/ScrollToTop";
import useProtectedRoute from "./hook/useProtectedRoute";
import ProtectedRoute from "./Components/Uitily/ProtectedRoute";
function App() {
  const [isUser] = useProtectedRoute();

  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/verify-email" element={<VertifyEmailPage />}></Route>
        <Route path="/properties" element={<PropertiesPage />}></Route>
        <Route path="/bookingproperty" element={<BookingPropertyPage />}></Route>
        <Route path="/detailsproperties/:id" element={<DetailsPropertiesPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        {/* End Public Pages */}

        {/* Start User Pages */}
        <Route element={<ProtectedRoute auth={isUser} />}>
          <Route path="/user/profile" element={<UserProfilePage />}></Route>
          <Route path="/user/requests" element={<UserRequsetsPage />}></Route>
          <Route path="/user/wishlist" element={<UserWishlistPage />}></Route>
          <Route path="/user/dashboard" element={<UserDashboardPage />}></Route>
          <Route path="/user/bookings" element={<UserBookingsPage />}></Route>
          <Route path="/user/addlisting" element={<UserAddListingPage />}></Route>
        </Route>
        {/* End User Pages */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

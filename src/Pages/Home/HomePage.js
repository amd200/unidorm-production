import React, { useState } from "react";
import Services from "../../Components/Home/Services";
import Landing from "../../Components/Home/Landing";
import Properties from "../../Components/Home/Properties ";
import Statistics from "../../Components/Home/Statistics";

function HomePage() {
  return (
    <main className="home-page">
      <Landing />
      <Statistics />
      <Properties />
      <Services />
    </main>
  );
}

export default HomePage;

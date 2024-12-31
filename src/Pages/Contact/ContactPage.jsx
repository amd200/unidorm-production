import React from "react";
import ContactOwner from "../../Components/BookingProperty/ContactOwner/ContactOwner";
import Steper from "../../Components/BookingProperty/Steper/Steper";

function ContactPage() {
  return (
    <main className="contact-page">
      <div className="container">
        <Steper />
        <ContactOwner />
      </div>
    </main>
  );
}

export default ContactPage;

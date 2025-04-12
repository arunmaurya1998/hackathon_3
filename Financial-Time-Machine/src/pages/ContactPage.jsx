import React from "react";

const ContactPage = () => {
  return (
    <div className="text-white p-6" style={{ backgroundColor: "#0a1b2b" }}>
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-teal-300 text-2xl font-semibold text-center mb-6">
        We'd love to hear from you! You can reach us through email or WhatsApp.
      </p>

      <div className="text-center">
        {/* Email */}
        <a
          href="mailto:armaurya1998@gmail.com"
          className="text-teal-400 hover:text-teal-600 text-xl block mb-4"
        >
          📧 Send us an email: armaurya1998@gmail.com
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918398947288"
          target="blank"
          className="text-teal-400 hover:text-teal-600 text-xl block"
        >
          📱 Send us a message on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactPage;

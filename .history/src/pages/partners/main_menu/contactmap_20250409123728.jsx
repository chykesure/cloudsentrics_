import React from "react";

const ContactMap = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-20 text-gray-800">
      <h2 className="text-3xl font-semibold mb-4">Our Office Location</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start bg-white p-6 rounded shadow-md">
        {/* Left: Google Map */}
        <div className="w-full">
          <iframe
            title="Houston Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13807.84773977804!2d-95.56307065!3d29.72636405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c4fd9d2f11d1%3A0x3dcb9674fa5e6f01!2s3354%20Rogerdale%20Rd%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2sng!4v1712663541234!5m2!1sen!2sng"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            style={{ border: "0", borderRadius: "8px" }}
          ></iframe>
        </div>

        {/* Right: Address Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-2 text-blue-800">Houston Office</h3>
          <p className="text-gray-700 mb-1">
            3354 Rogerdale Rd, Houston, TX, United States, Texas
          </p>
          <p className="font-medium text-gray-800">
            Call: <a href="tel:+1442392825925" className="text-blue-600">+1 442 392 825925</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;

import React from "react";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

function HeaderContact() {
  const contactItems = [
    {
      icon: <FiMail size={24} />,
      title: "Alamat Email",
      details: ["cultureconnecttim@gmail.com"],
    },
    {
      icon: <FiPhoneCall size={24} />,
      title: "Nomor Telepon",
      details: ["+62 858-6324-4821", "+62 856-9339-0636"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 md:p-8 bg-white md:bg-transparent rounded-lg shadow-md md:shadow-none"
          >
            <div className="bg-amber-100 text-amber-800 p-4 rounded-full mb-3">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">
              {item.details.map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderContact;

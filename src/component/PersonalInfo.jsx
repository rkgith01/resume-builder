/* eslint-disable react/prop-types */
// import React from "react";

const PersonalInfo = ({ resumeContent, handleInputChange }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-1">Full Name:</label>
        <input
          className=" dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 w-full"
          type="text"
          name="fullName"
          placeholder={resumeContent.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email:</label>
        <input
          className="dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 w-full"
          type="email"
          name="email"
          placeholder={resumeContent.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">address:</label>
        <input
          className="border dark:bg-gray-700 border-gray-300 rounded px-4 py-2 w-full"
          type="text"
          name="address"
          placeholder={resumeContent.address}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Phone:</label>
        <input
          className="border dark:bg-gray-700 border-gray-300 rounded px-4 py-2 w-full"
          type="tel"
          name="phone"
          placeholder={resumeContent.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Summary Header:</label>
        <input
          className=" dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 w-full"
          type="text"
          name="profileHeader"
          placeholder={resumeContent.profileHeader}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Summary Para:</label>
        <textarea
          className=" dark:bg-gray-700 border border-gray-300 rounded-lg px-4 py-2 w-full h-[120px]"
          type="text"
          name="profilePara"
          placeholder={resumeContent.profilePara}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default PersonalInfo;

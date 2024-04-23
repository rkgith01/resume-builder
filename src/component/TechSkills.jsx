/* eslint-disable react/prop-types */
// import React from "react";

const TechSkills = ({ resumeContent, handleInputChange }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-1">Technical Header:</label>
        <input
          className=" dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 w-full"
          type="text"
          name="technicalHeader"
          placeholder={resumeContent.technicalHeader}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Technical Skills:</label>
        <textarea
          className="dark:bg-gray-700 border border-gray-300 rounded-lg px-4 py-2 w-full h-[120px]"
          name="technicalSkills"
          placeholder={resumeContent.technicalSkills.join("\n")}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default TechSkills;

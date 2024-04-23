/* eslint-disable react/prop-types */
// import React from 'react'

const Education = ({ resumeContent, handleInputChange }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block mb-1">Education:</label>
        <input
          type="text"
          name="date1"
          className="pl-4 my-2 py-1 dark:bg-gray-700 border border-gray-300 rounded-lg"
          placeholder={resumeContent.date1}
          onChange={handleInputChange}
        />
        <textarea
          className=" dark:bg-gray-700 border border-gray-300 rounded-lg px-4 py-2 w-full h-[50px]"
          type="text"
          name="educationpara1"
          placeholder={resumeContent.educationpara1}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="date2"
          placeholder={resumeContent.date2}
          className="pl-4 my-2 py-1 dark:bg-gray-700 border border-gray-300 rounded-lg"
          onChange={handleInputChange}
        />
        <textarea
          className=" dark:bg-gray-700 border border-gray-300 rounded-lg px-4 py-2 w-full h-[50px]"
          type="text"
          name="educationpara2"
          placeholder={resumeContent.educationpara2}
          onChange={handleInputChange}
        />
      </div>
      {/* certification */}
      <div className="mb-4">
        <label className="block mb-1">Certifications Header:</label>
        <input
          className=" dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 w-full"
          type="text"
          name="certiHeader"
          placeholder={resumeContent.certiHeader}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Certifications:</label>
        <textarea
          className="dark:bg-gray-700 border border-gray-300 rounded-lg px-4 py-2 w-full h-[120px]"
          name="certifications"
          placeholder={resumeContent.certifications.join("\n")}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default Education;

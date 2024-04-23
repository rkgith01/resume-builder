/* eslint-disable react/prop-types */
// import React from "react";

const ContactRef = ({resumeContent, handleInputChange}) => {
  
  return (
    <>
      {/* contact */}
      <div className="mb-4">
        <label className="block mb-1">Contact:</label>
        <input
          className="dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 w-full"
          type="text"
          name="contact"
          placeholder={resumeContent.contact.join(", ")}
          onChange={handleInputChange}
        />
      </div>
      {/* reference */}
      <div className="mb-4">
        <label className="block mb-1">References:</label>
        <textarea
          className="dark:bg-gray-700 border border-gray-300 rounded-lg px-4 py-2 w-full h-[60px]"
          name="references"
          placeholder={resumeContent.references}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default ContactRef;

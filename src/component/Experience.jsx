/* eslint-disable react/prop-types */
// import React from "react";

const Experience = ({
  resumeContent,
  handleInputChange,
  handleAchievementChange,
}) => {
  return (
    <>
      <div>
        <h2 className="text-lg font-bold mb-2">Professional Experience</h2>
        <div className="mb-4">
          <label className="block mb-1">Experience Header:</label>
          <input
            className=" dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 w-full"
            type="text"
            name="experienceHeader"
            placeholder={resumeContent.experienceHeader}
            onChange={handleInputChange}
          />
        </div>
        {resumeContent.experience.map((exp, expIndex) => (
          <div key={expIndex} className="mb-4">
            {/* Added input fields for company, location, start date, end date */}
            <div>
              <span className="text-2xl">Block: #{expIndex + 1}</span>
            </div>
            <h3 className="text-lg pt-4">Position Info</h3>
            <div className="p-2 m-2">
              <input
                type="text"
                name="position"
                className="dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 mb-2 mx-2"
                placeholder={exp.position}
                onChange={(event) => handleInputChange(event, expIndex)}
              />
              <input
                type="text"
                name="location"
                className="dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 mb-2  mx-2"
                // value={exp.location}
                placeholder={exp.location}
                onChange={(event) => handleInputChange(event, expIndex)}
              />
              <input
                type="text"
                name="company"
                className="dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 mb-2  mx-2"
                placeholder={exp.company}
                onChange={(event) => handleInputChange(event, expIndex)}
              />
              <input
                type="text"
                name="startDate"
                className="dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 mb-2  mx-2"
                placeholder={exp.startDate}
                onChange={(event) => handleInputChange(event, expIndex)}
              />
              <input
                type="text"
                name="endDate"
                className="dark:bg-gray-700 border border-gray-300 rounded px-4 py-2 mb-2 "
                placeholder={exp.endDate}
                onChange={(event) => handleInputChange(event, expIndex)}
              />
            </div>
            <span className="p-2 mb-4">Responsibilities: </span>
            <textarea
              className="dark:bg-gray-700 border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full h-[55px]"
              name="responsibilities"
              placeholder={exp.responsibilities}
              onChange={(event) => handleInputChange(event, expIndex)}
            />
            <span className="p-2 ">Key points</span>
            {exp.achievements.map((achievement, achIndex) => (
              <textarea
                key={achIndex}
                className="dark:bg-gray-700 border border-gray-300 rounded-lg px-4 py-2 mb-2 w-full h-[65px]"
                placeholder={achievement}
                onChange={(event) =>
                  handleAchievementChange(event, expIndex, achIndex)
                }
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;

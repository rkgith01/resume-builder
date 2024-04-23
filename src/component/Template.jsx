/* eslint-disable react/prop-types */
// import React from 'react'

const Template = ({ resumeContent, selectedFont }) => {
  return (
    <div className="min-h-screen mx-4 my-4  px-8 pt-6 pb-8 mb-4" style={{ fontFamily: selectedFont }}>
      {/* <h2 className="text-2xl font-bold mb-4">Resume</h2> */}
      <div >
        {/* name and info */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{resumeContent.fullName}</h1>

          <p className="text-gray-600 mb-4">
            {resumeContent.email} | {resumeContent.phone} |{" "}
            {resumeContent.address}
          </p>
          <hr />
        </div>
        {/* profile summary*/}
        <div>
          <h2 className="text-lg font-bold mb-2">
            {resumeContent.profileHeader}
          </h2>
          <p className="mb-4">{resumeContent.profilePara}</p>
        </div>
        {/* tech skills */}
        <div className="mb-2">
          <h2 className="text-lg font-bold mb-2">
            {resumeContent.technicalHeader}
          </h2>
          <div className="pl-[25px]">
            {resumeContent.technicalSkills.map((item, i) => (
              <ul key={i} className="list-disc">
                <li>{item}</li>
              </ul>
            ))}
          </div>
        </div>
        {/* experience */}
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">
            {resumeContent.experienceHeader}
          </h2>
          <div className="p[25px]">
            {resumeContent.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-md font-bold mb-1">
                  {exp.position} - {exp.company}, {exp.location},{" "}
                  <span className="text-gray-400">
                    {" "}
                    {exp.startDate} - {exp.endDate}
                  </span>
                </h3>
                <p className="mb-2">{exp.responsibilities}</p>
                <ul className="list-disc pl-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* education */}
        <div>
          <h2 className="text-lg font-bold mb-2">
            {resumeContent.educationheader}
          </h2>
          <div className="p-2 pl-4">
            <span>{resumeContent.date1}</span>
            <p className="mb-4">{resumeContent.educationpara1}</p>
            <span>{resumeContent.date2}</span>
            <p className="mb-4">{resumeContent.educationpara2}</p>
          </div>
        </div>
        {/* certification */}
        <div>
          <h2 className="text-lg font-bold mb-2">
            {resumeContent.certiHeader}
          </h2>
          <div className="p-2 pl-4">
            {resumeContent.certifications.map((items, i) => (
              <li key={i}>{items}</li>
            ))}{" "}
          </div>
        </div>
        {/* contact */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact:</h2>
          <div className="p-2 pl-4">
            {resumeContent.contact.map((items, i) => (
              <li key={i} className="list-disc">
                {items}
              </li>
            ))}{" "}
          </div>
        </div>
        {/* reference */}
        <div>
          <h2 className="text-lg font-bold mb-2">References:</h2>
          <p className="mb-4">{resumeContent.references}</p>
        </div>
      </div>
    </div>
  );
};

export default Template;

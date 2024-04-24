import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Template from "./Template";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import TechSkills from "./TechSkills";
import Experience from "./Experience";
import ContactRef from "./ContactRef";
import Timeline from "./Timeline";
import SmoothScroll from "./SmoothScroll";

// let profileParaText = "";

// let educationlist1 = "";
// let educationlist2 = "";

// let content = {
//   fullName: "",
//   email: "",
//   phone: "",
//   address: "",
//   profileHeader: "" || "Profile Summary",
//   profilePara: profileParaText,
//   educationheader: "" || "Education",
//   date1: "",
//   date2: "",
//   educationpara1: educationlist1,
//   educationpara2: educationlist2,
//   technicalHeader:  "" || "Tech Skills",
//   technicalSkills: [
//     "",
//     "",
//     "",
//     "",
//   ],
//   experienceHeader:  "" || "Experience/Projects",
//   experience: [
//     {
//       position: "",
//       company: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       responsibilities: "",
//       achievements: [
//         "",
//         "",
//         "",
//         "",
//         "",
//       ],
//     },
//     {
//       position: "",
//       company: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       responsibilities: "",
//       achievements: [
//         "",
//         "",
//         "",
//         "",
//       ],
//     },
//     {
//       position: "",
//       company: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       responsibilities: "",
//       achievements: [
//         "",
//         "",
//         "",
//         "",
//       ],
//     },
//   ],
//   certiHeader:  "" || "Certifications",
//   certifications: [
//     "",
//     "",
//   ],
//   // Projects: "",
//   contact: ["eamil@mail.com", "123-123-1234"],
//   references: "",
// };

let profileParaText =
  "Dynamic and results-driven software developer with [X] years of experience in designing, developing, and deploying innovative software solutions. Proficient in multiple programming languages and frameworks, with a strong focus on problem-solving and collaboration. Seeking to leverage technical expertise to contribute to cutting-edge projects in [industry/sector].";

let educationlist1 = `[Degree], [Major], [University], [Year of Graduation]`;
let educationlist2 =
  "Relevant coursework: [List any relevant coursework or specialization]";

let content = {
  fullName: "Oscar Daniel",
  email: "oscardaniel@me.com",
  phone: "123-123-123",
  address: "123 Main St, Anytown, USA",
  profileHeader: "" || "Profile Summary",
  profilePara: profileParaText,
  educationheader: "" || "Education",
  date1: "2010 - 2015",
  date2: "2010 - 2015",
  educationpara1: educationlist1,
  educationpara2: educationlist2,
  technicalHeader: "Tech Skills",
  technicalSkills: [
    "Programming Languages: [List languages, e.g., Java, Python, JavaScript, C++]",
    "Web Development: [List frameworks, e.g., React, Angular, Node.js]",
    "Database Management: [List databases, e.g., SQL, MongoDB]",
    " Tools & Technologies: [List relevant tools, e.g., Git, Docker, AWS]",
  ],
  experienceHeader: "" || "Experience/Project",
  experience: [
    {
      position: "[Current/Recent Position]",
      company: "[Company Name]",
      location: "[Location]",
      startDate: "[Start Date]",
      endDate: "[End Date]",
      responsibilities:
        "[Highlighting core responsibilities and key projects undertaken].",
      achievements: [
        "Effectively collaborated with cross-functional teams to deliver high-quality software solutions within stringent timelines.",
        "Implemented industry best practices to enhance code quality, testing procedures, and documentation standards.",
        "Led [specific initiatives or projects], resulting in measurable improvements such as increased efficiency, cost savings, or revenue growth.",
        "Successfully drove [specific initiatives or projects] to completion, resulting in significant positive outcomes for the organization.",
        "Championed [specific initiatives or projects] that led to notable achievements, demonstrating leadership and strategic vision.",
      ],
    },
    {
      position: "[Previous Position]",
      company: "[Company Name]",
      location: "[Location]",
      startDate: "[Start Date]",
      endDate: "[End Date]",
      responsibilities:
        "[Highlighting core responsibilities and key projects undertaken].",
      achievements: [
        "Provided essential support in troubleshooting and resolving technical challenges, ensuring seamless project execution and client satisfaction.",
        "Contributed actively to code reviews, offering valuable feedback to enhance team performance and product quality.",
        "Played a pivotal role in optimizing [specific process or system], resulting in quantifiable improvements such as enhanced efficiency or cost reduction.",
        "Effectively managed [specific process or system], leading to measurable enhancements in productivity, performance, or operational efficiency.",
      ],
    },
    {
      position: "[Previous Position]",
      company: "[Company Name]",
      location: "[Location]",
      startDate: "[Start Date]",
      endDate: "[End Date]",
      responsibilities:
        "[Highlighting core responsibilities and key projects undertaken].",
      achievements: [
        "Provided essential support in troubleshooting and resolving technical challenges, ensuring seamless project execution and client satisfaction.",
        "Contributed actively to code reviews, offering valuable feedback to enhance team performance and product quality.",
        "Played a pivotal role in optimizing [specific process or system], resulting in quantifiable improvements such as enhanced efficiency or cost reduction.",
        "Effectively managed [specific process or system], leading to measurable enhancements in productivity, performance, or operational efficiency.",
      ],
    },
  ],
  certiHeader: "Certifications",
  certifications: [
    "Certification Name: [Name]\nIssuing Organization: [Organization]\nDate: [Date]",
    "Certification Name: [Name]\nIssuing Organization: [Organization]\nDate: [Date]",
  ],
  // Projects: "",
  contact: ["eamil@mail.com", "123-123-1234"],
  references: "Available upon request.",
};

const ResumePage = () => {
  const [resumeContent, setResumeContent] = useState(content);
  const [timelineItems, setTimelineItems] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedFont, setSelectedFont] = useState("serif");
  const togglePreview = () => {
    setPreviewVisible(!previewVisible);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateTimeline = () => {
    const items = [
      { title: "Personal Info", completed: isPersonalInfoCompleted() },
      { title: "Education", completed: isEducationCompleted() },
      { title: "Tech Skills", completed: isTechSkillsCompleted() },
      { title: "Experience", completed: isExperienceCompleted() },
      { title: "Contact", completed: isContactCompleted() },
      { title: "Reference", completed: isReferenceCompleted() },
      // Add other sections and their completion checks here
    ];
    // console.log(items);
    setTimelineItems(items);
  };

  useEffect(() => {
    updateTimeline();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isPersonalInfoCompleted = () => {
    return (
      resumeContent.fullName &&
      resumeContent.email &&
      resumeContent.phone &&
      resumeContent.address
    );
  };

  const isEducationCompleted = () => {
    return (
      resumeContent.educationheader &&
      (resumeContent.educationpara1 || resumeContent.educationpara2)
    );
  };

  const isTechSkillsCompleted = () => {
    return (
      !!resumeContent.technicalSkills &&
      resumeContent.technicalSkills.some((skill) => !!skill)
    );
  };

  const isExperienceCompleted = () => {
    return (
      !!resumeContent.experience &&
      resumeContent.experience.some((exp) => !!exp.position)
    );
  };

  const isContactCompleted = () => {
    return (
      resumeContent.contact &&
      resumeContent.contact.length > 0 &&
      resumeContent.references
    );
  };

  const isReferenceCompleted = () => {
    return resumeContent.references;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResumeContent((prevContent) => ({
      ...prevContent,
      [name]:
        name === "technicalSkills" || name === "certifications"
          ? value.split("\n")
          : name === "contact" // Check if the input is for the contact field
          ? value.split(",").map((item) => item.trim()) // Split and trim the value to create an array
          : value,
    }));
  };

  const handleAchievementChange = (event, expIndex, achIndex) => {
    const { value } = event.target;
    const updatedExperience = [...resumeContent.experience];
    updatedExperience[expIndex].achievements[achIndex] = value;
    setResumeContent((prevState) => ({
      ...prevState,
      experience: updatedExperience,
    }));
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    font: selectedFont,
  });
  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto py-5">
      {/* Timeline */}
      <Timeline timelineItems={timelineItems} />
      {/* Resume Content */}
      <div className="w-full md:w-3/4 px-4">
        <h2 className="text-2xl font-bold mb-4">Edit Resume</h2>
        {/* Personal Info */}
        <PersonalInfo
          resumeContent={resumeContent}
          handleInputChange={handleInputChange}
        />

        {/* Education */}
        <Education
          resumeContent={resumeContent}
          handleInputChange={handleInputChange}
        />

        {/* Tech Skills */}
        <TechSkills
          resumeContent={resumeContent}
          handleInputChange={handleInputChange}
        />

        {/* Experience */}
        <Experience
          handleAchievementChange={handleAchievementChange}
          resumeContent={resumeContent}
          handleInputChange={handleInputChange}
        />

        {/* Contact & Reference */}
        <ContactRef
          resumeContent={resumeContent}
          handleInputChange={handleInputChange}
        />

        {/* Print Button */}
        <Button
          className="my-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrint}
        >
          Print
        </Button>
        <Button
          className="my-3 mx-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={togglePreview}
        >
          {previewVisible ? "Hide Preview" : "Show Preview"}
        </Button>

        <select
          className="bg-white font-serif dark:bg-gray-800 border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring focus:ring-blue-400"
          value={selectedFont}
          onChange={handleFontChange}
        >
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-serif</option>
          <option value="Cambria">Cambria</option>
          <option value="Georgia">Georgia</option>
        </select>

        {/* Only show the template if previewVisible is true */}
        {previewVisible && (
          <div ref={componentRef}>
            <Template
              resumeContent={resumeContent}
              selectedFont={selectedFont}
            />
          </div>
        )}
        <SmoothScroll />
      </div>

      {/* Hidden printing view */}
      <div className="hidden">
        <div ref={componentRef}>
          <Template resumeContent={resumeContent} selectedFont={selectedFont} />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

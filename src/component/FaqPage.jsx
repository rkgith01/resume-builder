/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { Link } from "react-router-dom";

const FaqPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleToggle = (index, event) => {
    event.preventDefault();
    setOpenQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "How do I create my resume PDF?",
      answer: (
        <p className="font-semibold">
          You can create your resume PDF by following these steps:
          <ol className="list-decimal list-inside">
            <li>
              Start by clicking on the "Get started" button on the homepage.
            </li>
            <li>
              Edit and update your resume with ease using our intuitive
              interface.
            </li>
            <li>
              Just before you're done, you can choose the standard resume font
              styling
            </li>
            <li>
              Once you're done, Preview the resume and click on the "Print"
              button to generate your PDF.
            </li>
          </ol>
        </p>
      ),
    },
    {
      question: "Can I print my resume directly from the browser?",
      answer: (
        <p className="font-semibold">
          Yes, you can print your resume directly from the browser. After
          editing and updating your resume, simply click on the "Print" button,
          and your resume will be printed using your browser's print
          functionality.
        </p>
      ),
    },
    {
      question: "Can i choose any of the fonts?",
      answer: (
        <p className="font-semibold">
          Yes, you can choose any of the fonts available in the options list.
          Currently there are four font available that you can choose from
        </p>
      ),
    },
    {
      question: "How can I get support as a developer?",
      answer: (
        <p className="font-semibold">
          You can get support as a developer by clicking the coffee icons ont
          the top right hand side of the page and giving a star on github !
        </p>
      ),
    },
  ];

  return (
    <section className="py-6 border-t-2">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 text-gray-600">
          Here are some common questions about our web app:
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              open={openQuestion === index}
              onClick={(e) => handleToggle(index, e)}
              className="w-full border rounded-lg cursor-pointer"
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-sky-600">
                {faq.question}
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/resume-edit">
            <button className="px-8 py-3 text-lg font-semibold rounded bg-orange-600 text-gray-50">
              Edit Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;

// import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="m-6 border-y-2 dark:border-white border-black">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Create Your resume PDF
          <span className="dark:text-orange-600 text-orange-600">
            {" "}
            on the go{" "}
          </span>
          easy in 3 steps
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Edit your resume with ease using our intuitive interface.
        </p>
        <div className="flex flex-wrap justify-center">
          <ol className="items-start list-decimal list-inside font-semibold">
            <li>Get Started and enter your details</li>
            <li>Update & Preview your resume</li>
            <li>Easily choose your fonts, Print and download your resume </li>
          </ol>
        </div>
        <p className="text-2xl py-6 px-4 font-bold">Thats it!</p>
        <div className="flex flex-wrap justify-center">
          <Link to={"/resume-edit"}>
            <Button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-orange-600 dark:text-gray-50">
              Get started
            </Button>
          </Link>
          <a href="#feature">
            <Button
              variant="border"
              className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-100 border-gray-900 dark:border-gray-300"
            >
              Learn more
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* eslint-disable react/prop-types */
// import React from 'react'

const Timeline = ({ timelineItems }) => {
  return (
    <div className=" lg:sticky lg:top-[10%]  w-full md:w-1/3 lg:w-1/4 px-4  mt-8 md:mt-0 overflow-y-auto max-h-screen">
      <section className="bg-gray-100 text-gray-800">
        <div className="container mx-auto py-12">
          <h3 className="text-3xl font-semibold text-center md:text-left">
            Timeline
          </h3>
          <div className="mt-4 space-y-4">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full mr-4 ${
                    item.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
                <p className="text-lg font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;

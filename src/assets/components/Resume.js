import React from "react";
import myResume from '../files/TendaiClive_Chikwape_cv.pdf'

const Resume = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto p-5">
        <a
          href={myResume}
          className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;

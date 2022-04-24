import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ experiences }) => {
  return (
    <div>
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
        Experience
      </h1>
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} />
      ))}
    </div>
  );
};

export default Experience;

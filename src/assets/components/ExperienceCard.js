import React from 'react'
import { FaLink } from "react-icons/fa";

const ExperienceCard = ({ experience: { company, title, period, link } }) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-2  border-gray-300">
      <a href={link}>
        <h1 className="text-xl text-center font-bold">
          {company}{" "}
          <FaLink className="inline align-baseline" />
        </h1>
      </a>
      <hr className="my-4" />
      <p className="">{title}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
          <div className="px-4 py-1 border-2 rounded-full">{period}</div>
      </div>
    </div>
  )
}

export default ExperienceCard
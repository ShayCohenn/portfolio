"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  tags: { name: string; color: string }[];
  website: string;
  github: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  tags,
  github,
  website,
}: Props) => {
  return (
    <div
      className="mx-auto w-[90%] md:w-[400px] 2xl:w-[500px] rounded-lg 
    shadow-lg border border-[#2A0E61]">
      <a href={website} target="_blank">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="relative w-full object-contain"
        />
      </a>
      <div className="relative p-4">
        <div className="flex justify-between">
        <a href={website} target="_blank">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </a>
        <a href={github} target="_blank">
        <img src="/github.svg" alt="github"/>
        </a>
        </div>
        <p className="mt-2 text-gray-300">{description}</p>

        <div className="flex mt-2 flex-wrap font-bold">
          {tags.map((tag, index) => (
            <span key={index} className="mr-2" style={{ color: tag.color }}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

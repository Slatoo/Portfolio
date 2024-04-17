"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './projectCard';
import ProjectTag from './projectTag';
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/Slatoo",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/Slatoo",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/Slatoo",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/https://github.com/Slatoo",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/Slatoo",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/Slatoo",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })
  const handleTag = (newTag) => {
    setTag(newTag)
  }
  const filteredProject = projectsData.filter((project) => project.tag.includes(tag))

  const cardVariant = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className='text-white flex flex-row items-center justify-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTag}
          isSelected={tag === "All"}
          name="All"
        />
        <ProjectTag
          onClick={handleTag}
          isSelected={tag === "Web"}
          name="Web"
        />
        <ProjectTag
          onClick={handleTag}
          isSelected={tag === "Mobile"}
          name="Mobile"
        />

      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariant}
            initial="initial"
            animate={isInview ? "animate" : "initial"}
            transition={{duration: 0.5, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              description={project.description}
              title={project.title}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectSection
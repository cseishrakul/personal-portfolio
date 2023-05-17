import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectThree, projectTwo } from "../../assets/index";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      />
      </div>
      <div className="grid grid-cols-3 gap-14">
        <ProjectCard title="SOCIAL MEDIA CLONE" des="Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt." src={projectOne} />
        <ProjectCard title="SOCIAL MEDIA CLONE" des="Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt." src={projectTwo} />
        <ProjectCard title="SOCIAL MEDIA CLONE" des="Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt." src={projectThree} />
        <ProjectCard title="SOCIAL MEDIA CLONE" des="Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt." src={projectOne} />
        <ProjectCard title="SOCIAL MEDIA CLONE" des="Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt." src={projectTwo} />
        <ProjectCard title="SOCIAL MEDIA CLONE" des="Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt.Minim fugiat esse officia incididunt." src={projectThree} />
      </div>
    </section>
  );
};

export default Projects;

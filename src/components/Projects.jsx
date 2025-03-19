import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: transparent;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const ProjectCard = styled(motion.a)`
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.primary};
    color: #fff;
  }
`;

const projects = [
  {
    name: "Deploy RESTful Web App",
    description: "Built a scalable REST API with PHP, CSS, and JavaScript.",
    link: "https://github.com/damianng1112/WebDevPhp",
  },
  {
    name: "Docker Website Deployment",
    description: "Containerized a website using Docker for easy deployment.",
    link: "https://github.com/damianng1112/DockerProject",
  },
  {
    name: "Meat Supplier Tracking App",
    description: "Full-stack web & mobile app for shipment tracking.",
    link: "https://github.com/damianng1112/CartyMeats",
  },
  {
    name: "NewsAgent App",
    description: "Java-based news app using DevOps practices for deployment.",
    link: "https://github.com/damianng1112/NewsDelivery",
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Projects
      </Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.link}
            target="_blank"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub size={40} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;

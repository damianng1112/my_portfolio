import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaJava, FaAws } from "react-icons/fa";
import { SiJavascript, SiReact, SiPhp, SiDocker, SiSpringboot } from "react-icons/si";
import { SectionContainer, ContentWrapper, SectionTitle } from "./StyledComponents";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  background: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImageContainer = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  background: ${props => props.bgColor || "#2c2c2c"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectIcon = styled.div`
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.3);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  flex: 1;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  background: rgba(142, 68, 173, 0.2);
  color: ${(props) => props.theme.primary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: ${props => props.primary ? props.theme.primary : "transparent"};
  color: ${props => props.primary ? "#fff" : props.theme.text};
  border: ${props => props.primary ? "none" : `1px solid ${props.theme.text}`};
  border-radius: 4px;
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.primary ? props.theme.primary + "cc" : "rgba(255, 255, 255, 0.1)"};
    transform: translateY(-2px);
  }
`;

// Enhanced project data with more details
const projectsData = [
  {
    name: "Integrated Telemedicine Platform",
    description: "A comprehensive telemedicine solution with video consultations, secure messaging, and AI-powered symptom assessment. Features dual AI approach combining ML-based disease prediction with LLM-based symptom triage.",
    techStack: ["React", "Node.js", "MongoDB", "Python", "Docker", "WebRTC", "AI/ML"],
    bgColor: "#764ABC",
    icon: <SiReact />,
    githubLink: "https://github.com/damianng1112/Final_Year_Project",
  },
  {
    name: "Deploy RESTful Web App",
    description: "Built a scalable REST API with PHP and JavaScript, featuring user authentication, data validation, and CRUD operations for managing restaurant inventory.",
    techStack: ["PHP", "JavaScript", "CSS", "MySQL", "REST API"],
    bgColor: "#4F5D95",
    icon: <SiPhp />,
    githubLink: "https://github.com/damianng1112/WebDevPhp",
  },
  {
    name: "Docker Website Deployment",
    description: "Containerized a multi-service web application using Docker, implementing CI/CD pipeline with automated testing, and deployed to AWS with load balancing.",
    techStack: ["Docker", "JavaScript", "AWS", "CI/CD", "Nginx"],
    bgColor: "#2496ED",
    icon: <SiDocker />,
    githubLink: "https://github.com/damianng1112/DockerProject",
  },
  {
    name: "Meat Supplier Tracking App",
    description: "Full-stack web & mobile application for meat shipment tracking. Implemented real-time notifications, GPS tracking, and automated delivery reporting system.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    bgColor: "#61DAFB",
    icon: <SiReact />,
    githubLink: "https://github.com/damianng1112/CartyMeats",
  },
  {
    name: "NewsAgent App",
    description: "Java-based news delivery application with Spring Boot backend. Features include subscription management, automated billing, and route optimization for deliveries.",
    techStack: ["Java", "Spring Boot", "MySQL", "JUnit", "Maven"],
    bgColor: "#b07219",
    icon: <FaJava />,
    githubLink: "https://github.com/damianng1112/NewsDelivery",
  },
];

// Icon mapping for tech badges
const techIcons = {
  "React": <SiReact size={12} />,
  "Node.js": <SiJavascript size={12} />,
  "PHP": <SiPhp size={12} />,
  "Docker": <SiDocker size={12} />,
  "Java": <FaJava size={12} />,
  "Spring Boot": <SiSpringboot size={12} />,
  "AWS": <FaAws size={12} />,
};

const Projects = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </SectionTitle>
        <ProjectGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImageContainer bgColor={project.bgColor}>
                <ProjectIcon>{project.icon}</ProjectIcon>
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, idx) => (
                    <TechBadge key={idx}>
                      {techIcons[tech] || null} {tech}
                    </TechBadge>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer" primary>
                    <FaGithub /> Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default Projects;
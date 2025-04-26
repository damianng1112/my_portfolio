import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaPython, FaDocker, FaAws, FaNetworkWired, FaCode } from "react-icons/fa";
import { SiMongodb, SiMysql, SiGit, SiTensorflow, SiJira, SiApachekafka } from "react-icons/si";
import { SectionContainer, ContentWrapper, SectionTitle } from "./StyledComponents";

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  width: 100%;
`;

const SkillCard = styled(motion.div)`
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  svg {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
  }
  
  p {
    font-size: 0.95rem;
    margin-top: 0.5rem;
    font-weight: 500;
  }
  
  &:hover {
    background: #2a2a2a;
    box-shadow: 0 6px 12px rgba(142, 68, 173, 0.15);
    
    svg {
      transform: scale(1.1);
    }
  }
`;

// Group skills by category
const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava size={40} color="#f89820" /> },
      { name: "Python", icon: <FaPython size={40} color="#FFD43B" /> },
      { name: "HTML/CSS/JS", icon: <FaCode size={40} color="#E44D26" /> },
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
      { name: "REST & SOAP APIs", icon: <FaCode size={40} color="#4DB33D" /> }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
      { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker size={40} color="#2496ED" /> },
      { name: "AWS", icon: <FaAws size={40} color="#FF9900" /> },
      { name: "Microservices", icon: <SiApachekafka size={40} color="#D82C20" /> }
    ]
  },
  {
    category: "Data Science & AI",
    skills: [
      { name: "Data Mining", icon: <SiTensorflow size={40} color="#FF6F00" /> },
      { name: "Machine Learning", icon: <SiTensorflow size={40} color="#FF6F00" /> }
    ]
  },
  {
    category: "Software Engineering",
    skills: [
      { name: "SDLC & Agile", icon: <SiJira size={40} color="#0052CC" /> },
      { name: "Version Control (Git)", icon: <SiGit size={40} color="#F1502F" /> },
      { name: "Networking", icon: <FaNetworkWired size={40} color="#2ECC71" /> }
    ]
  }
];

const CategorySection = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
  text-align: left;
  border-bottom: 2px solid #2c2c2c;
  padding-bottom: 0.5rem;
`;

const Skills = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technical Skills
        </SectionTitle>
        
        {skillCategories.map((category, idx) => (
          <CategorySection key={idx}>
            <CategoryTitle>{category.category}</CategoryTitle>
            <SkillGrid>
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.icon}
                  <p>{skill.name}</p>
                </SkillCard>
              ))}
            </SkillGrid>
          </CategorySection>
        ))}
      </ContentWrapper>
    </SectionContainer>
  );
};

export default Skills;
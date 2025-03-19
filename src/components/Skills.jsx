import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaPython, FaDocker, FaAws, FaNetworkWired, FaCode } from "react-icons/fa";
import { SiMongodb, SiMysql, SiGit, SiTensorflow, SiJira, SiApachekafka } from "react-icons/si";

const SkillsContainer = styled.div`
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

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  justify-content: center;
`;

const SkillCard = styled(motion.div)`
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 10px;
`;

const skills = [
  // Programming Languages
  { name: "Java", icon: <FaJava size={40} color="#f89820" /> },
  { name: "Python", icon: <FaPython size={40} color="#FFD43B" /> },

  // Web Development
  { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
  { name: "HTML/CSS/JS", icon: <FaCode size={40} color="#E44D26" /> },
  { name: "REST & SOAP APIs", icon: <FaCode size={40} color="#4DB33D" /> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> },

  // Cloud & DevOps
  { name: "Docker", icon: <FaDocker size={40} color="#2496ED" /> },
  { name: "AWS", icon: <FaAws size={40} color="#FF9900" /> },
  { name: "Microservices", icon: <SiApachekafka size={40} color="#D82C20" /> },

  // Data Science & AI
  { name: "Data Mining", icon: <SiTensorflow size={40} color="#FF6F00" /> },
  { name: "Machine Learning", icon: <SiTensorflow size={40} color="#FF6F00" /> },
  { name: "Algorithms & Data Structures", icon: <FaCode size={40} color="#F1502F" /> },

  // Software Engineering
  { name: "SDLC & Agile", icon: <SiJira size={40} color="#0052CC" /> },
  { name: "Version Control (Git)", icon: <SiGit size={40} color="#F1502F" /> },
  { name: "Networking", icon: <FaNetworkWired size={40} color="#2ECC71" /> },

];

const Skills = () => {
  return (
    <SkillsContainer>
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Skills
      </Title>
      <SkillGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index} whileHover={{ scale: 1.1 }}>
            {skill.icon}
            <p>{skill.name}</p>
          </SkillCard>
        ))}
      </SkillGrid>
    </SkillsContainer>
  );
};

export default Skills;

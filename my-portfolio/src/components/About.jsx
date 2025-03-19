import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCode, FaCloud } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { ContentWrapper } from "./StyledComponents";

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: transparent;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary};
`;

const Bio = styled(motion.p)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  max-width: 600px;
  margin: auto;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        About Me
      </Title>
      <Bio initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        I'm a passionate <strong>Full-Stack Developer</strong> with a strong foundation in  
        <strong> web development, cloud computing, and AI</strong>.  
        I thrive in building <strong>scalable, efficient, and user-friendly applications </strong>  
        by leveraging modern technologies like <strong>React.js, Node.js, Python, and cloud services</strong>.  
        <br /><br />
        My interests extend beyond traditional software development. I have a deep curiosity for  
        <strong> Artificial Intelligence</strong>, particularly in <strong>Large Language Models (LLMs),  
        machine learning, and data-driven solutions</strong>.  
        Currently, I am pursuing my <strong>BSc in Software Design with AI for Cloud Computing</strong>,  
        where I explore cutting-edge <strong>AI and DevOps</strong> practices to enhance application performance and scalability.
      </Bio>
      
      <SkillsContainer>
        <SkillCard whileHover={{ scale: 1.1 }}>
          <FaCode size={40} color="#8E44AD" />
          <p>Full-Stack Dev</p>
        </SkillCard>
        <SkillCard whileHover={{ scale: 1.1 }}>
          <FaCloud size={40} color="#3498db" />
          <p>Cloud & DevOps</p>
        </SkillCard>
        <SkillCard whileHover={{ scale: 1.1 }}>
          <GiArtificialIntelligence size={40} color="#f1c40f" />
          <p>AI & Machine Learning</p>
        </SkillCard>
      </SkillsContainer>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;

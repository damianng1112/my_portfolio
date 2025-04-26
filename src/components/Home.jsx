import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: transparent;
  padding: 0 1.5rem;
`;

const ContentBox = styled(motion.div)`
  background: rgba(18, 18, 18, 0.75);
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

const ProfileImage = styled(motion.img)`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${(props) => props.theme.primary};
  box-shadow: 0 10px 25px rgba(142, 68, 173, 0.3);
  
  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;

const ProfileImageBorder = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  border: 3px dashed ${(props) => props.theme.primary};
  opacity: 0.5;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(to right, ${(props) => props.theme.primary}, #9b59b6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 2rem;
  line-height: 1.6;
  
  .typed-cursor {
    color: ${(props) => props.theme.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  background: ${props => props.primary ? props.theme.primary : "#1e1e1e"};
  color: ${props => props.primary ? "#fff" : props.theme.text};
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.2);
    background: ${props => props.primary ? props.theme.primary : "#2a2a2a"};
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
  }
  
  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.text};
    margin-top: 0.5rem;
  }
`;

const ScrollArrow = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 25px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: ${(props) => props.theme.primary};
    border-radius: 50%;
    animation: scrollDown 2s infinite;
  }
  
  @keyframes scrollDown {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(15px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const stringsToRender = [
  "an Aspiring Software Developer",
  "a Cloud Computing Specialist",
  "an AI Enthusiast",
  "a Problem Solver"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

const Home = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HomeContainer id="home">
      <ContentBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ProfileImageWrapper>
          <ProfileImage
            src="/profilePic.jpg"
            alt="Wye Zhen Ng"
            variants={childVariants}
          />
          <ProfileImageBorder 
            animate={{ 
              rotate: 360 
            }} 
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }} 
          />
        </ProfileImageWrapper>

        <Name variants={childVariants}>
          Damian Wye Zhen Ng
        </Name>

        <Tagline variants={childVariants}>
          Hello, I am {" "}
          <ReactTyped strings={stringsToRender} typeSpeed={60} backSpeed={50} loop />
        </Tagline>

        <SocialLinks variants={childVariants}>
          <SocialLink 
            href="https://github.com/damianng1112" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> GitHub
          </SocialLink>
          <SocialLink 
            href="https://www.linkedin.com/in/wye-zhen-ng-541058220/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin /> LinkedIn
          </SocialLink>
          <SocialLink 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            primary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload /> Resume
          </SocialLink>
        </SocialLinks>
      </ContentBox>

      <ScrollIndicator 
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        whileHover={{ scale: 1.1 }}
        style={{ cursor: 'pointer' }}
      >
        <ScrollArrow />
        <span>Scroll Down</span>
      </ScrollIndicator>
    </HomeContainer>
  );
};

export default Home;
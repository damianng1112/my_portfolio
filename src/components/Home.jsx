import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {ReactTyped} from "react-typed";


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: transparent;
`;


const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid ${(props) => props.theme.primary};
`;

const Name = styled(motion.h1)`
  font-size: 3rem;
  color: ${(props) => props.theme.primary};
`;

const Tagline = styled(motion.p)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
`;

const stringsToRender = [
  "an Aspiring Software Developer",
  "a Cloud Enthusiast",
  "a Problem Solver"
];

const Home = () => {
  return (
    <HomeContainer>
      <ProfileImage
        src="/profilePic.jpg"
        alt="Profile Picture"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <Name
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Damian Wye Zhen Ng
      </Name>

      <Tagline
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Hello, I am {""}
        <ReactTyped strings={stringsToRender} typeSpeed={60} backSpeed={50} loop />
      </Tagline>
    </HomeContainer>
  );
};

export default Home;

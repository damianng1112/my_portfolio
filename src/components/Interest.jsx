import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLanguage, FaGlobeAmericas, FaTrophy } from "react-icons/fa";

const InterestsContainer = styled.div`
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

const InterestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const InterestCard = styled(motion.div)`
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InterestItem = ({ icon, title, content }) => (
  <InterestCard whileHover={{ scale: 1.05 }}>
    {icon}
    <h3 style={{ margin: "1rem 0" }}>{title}</h3>
    <p>{content}</p>
  </InterestCard>
);

const Interests = () => {
  return (
    <InterestsContainer id="interests">
      <Title 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Languages & Interests
      </Title>
      
      <InterestGrid>
        <InterestItem
          icon={<FaLanguage size={40} color="#8E44AD" />}
          title="Languages"
          content="Fluent in English, Cantonese, Mandarin, Malay"
        />
        
        <InterestItem
          icon={<FaGlobeAmericas size={40} color="#3498db" />}
          title="Interests"
          content="Half-marathons, Hackathons, Cultural Exploration"
        />
        
        <InterestItem
          icon={<FaTrophy size={40} color="#f1c40f" />}
          title="Achievements"
          content="NASA Space Apps Challenge Participant • TUS Academic Excellence"
        />
      </InterestGrid>
    </InterestsContainer>
  );
};

export default Interests;
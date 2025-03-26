// src/components/Achievements.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ContentWrapper } from "./StyledComponents";

const AchievementsContainer = styled.div`
  padding: 4rem 2rem;
  background: transparent; 
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const AchievementCard = styled(motion.div)`
  background: #1e1e1e; 
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CertImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
  border: 2px solid ${(props) => props.theme.primary}; 
`;

const AchievementTitle = styled.h3`
  margin: 1rem 0 0.5rem;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
`;

const AchievementIssuer = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const AchievementDate = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const VerifyLink = styled(motion.a)`
  font-size: 0.9rem;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

// Certificate data
const achievementsData = [
  {
    title: "Best Practices for Building Container Images",
    issuer: "IBM",
    date: "Mar 25, 2025",
    verifyUrl: "https://www.credly.com/badges/05957201-f91d-4d47-b8f1-18f72f725143",
    image: "/certificates/digital_sticker_Best Practices for Building Container Images.png", 
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "IBM",
    date: "Mar 19, 2025",
    verifyUrl: "https://skills.yourlearning.ibm.com/certificate/share/1de52b9e25ewogICJsZWFybmVyQ05VTSIgOiAiNDQ3NzUwMFJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIk1ETC01NjgiCn092c9d1288c-10",
    image: "/certificates/Digital Sticker_Introduction to Large Language Models.png", 
},
  // Add more certificates here in the future
];

const Achievements = () => {
  return (
    <AchievementsContainer id="achievements">
      <ContentWrapper>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Achievements & Certifications
        </Title>
        <AchievementsGrid>
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CertImage src={achievement.image} alt={achievement.title} />
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementIssuer>{achievement.issuer}</AchievementIssuer>
              <AchievementDate>Issued on: {achievement.date}</AchievementDate>
              <VerifyLink
                href={achievement.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                Verify Certificate
              </VerifyLink>
            </AchievementCard>
          ))}
        </AchievementsGrid>
      </ContentWrapper>
    </AchievementsContainer>
  );
};

export default Achievements;
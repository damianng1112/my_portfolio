import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const TimelineContainer = styled.div`
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
  margin-bottom: 2rem;
`;

const TimelineWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${(props) => props.theme.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
    text-align: right;
    
    @media (max-width: 768px) {
      width: 100%;
      text-align: left;
      padding-left: 70px;
    }
  }
  
  &:nth-child(even) {
    left: 50%;
    text-align: left;
    
    @media (max-width: 768px) {
      width: 100%;
      left: 0;
      padding-left: 70px;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: #1e1e1e;
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px;
  
  &:hover {
    background: ${(props) => props.theme.primary + '22'};
  }
`;

const TimelineIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.primary};
  border-radius: 50%;
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  ${TimelineItem}:nth-child(odd) & {
    right: -60px;
    
    @media (max-width: 768px) {
      left: 10px;
      right: auto;
    }
  }
  
  ${TimelineItem}:nth-child(even) & {
    left: -60px;
    
    @media (max-width: 768px) {
      left: 10px;
    }
  }
`;

const TimelineDate = styled.div`
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  margin-bottom: 5px;
`;

const TimelineTitle = styled.h3`
  margin: 5px 0;
  color: ${(props) => props.theme.text};
`;

const TimelineSubtitle = styled.h4`
  margin: 5px 0;
  color: ${(props) => props.theme.text};
  font-weight: normal;
  font-style: italic;
`;

const TimelineDescription = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
`;

const Timeline = () => {
  const timelineData = [
    {
      type: "education",
      date: "September 2021 – June 2025",
      title: "Bachelor of Science (Hons) in Software Design with AI for Cloud Computing",
      subtitle: "Technology University of the Shannon (TUS), Athlone, Ireland",
      description: "Achieved a GPA of 78.58 for year 1, 75.08 for year 2 and 79.83 for year 3."
    },
    {
      type: "experience",
      date: "January – May 2025",
      title: "IT Intern",
      subtitle: "Technology University of the Shannon (TUS)",
      description: "Worked on multiple client-facing projects including a Server-Side Web and Mobile Application for a Meat Supplier Client."
    },
    {
      type: "experience",
      date: "March 2022 – January 2025",
      title: "Food & Beverage Team Leader",
      subtitle: "Sheraton Athlone Hotel",
      description: "Led a team of up to 20 staff across banquets and restaurant settings, ensuring smooth service for events hosting up to 400 guests."
    },
    {
      type: "education",
      date: "January 2020 – December 2020",
      title: "Foundation in Science",
      subtitle: "Nilai University, Nilai, Malaysia",
      description: "Advanced knowledge and skills in science related subjects, business and information technology. Achieved Distinction."
    },
    {
      type: "experience",
      date: "March 2022 – January 2025",
      title: "Day Porter",
      subtitle: "Sheraton Athlone Hotel",
      description: "Delivered exceptional guest services, providing room assistance, and preparing meeting spaces for events."
    }
  ];

  return (
    <TimelineContainer id="timeline">
      <Title 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Experience & Education
      </Title>
      <TimelineWrapper>
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TimelineContent>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
              <TimelineDescription>{item.description}</TimelineDescription>
            </TimelineContent>
            <TimelineIcon>
              {item.type === "education" ? <FaGraduationCap /> : <FaBriefcase />}
            </TimelineIcon>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default Timeline;
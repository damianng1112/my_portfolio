import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SectionContainer, ContentWrapper, SectionTitle } from "./StyledComponents";

const TimelineWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: linear-gradient(to bottom, rgba(142, 68, 173, 0.2), ${(props) => props.theme.primary}, rgba(142, 68, 173, 0.2));
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
    
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

const TimelineContent = styled(motion.div)`
  padding: 20px;
  background: #1e1e1e;
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${(props) => props.theme.primary + '10'};
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #1e1e1e;
    border: 4px solid ${(props) => props.theme.primary};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    
    ${TimelineItem}:nth-child(even) & {
      left: -16px;
      right: auto;
    }
    
    @media (max-width: 768px) {
      left: -16px;
      right: auto;
    }
  }
`;

const TimelineIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.primary};
  border-radius: 50%;
  position: absolute;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 2;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  
  ${TimelineItem}:nth-child(odd) & {
    right: -70px;
    
    @media (max-width: 768px) {
      left: 10px;
      right: auto;
    }
  }
  
  ${TimelineItem}:nth-child(even) & {
    left: -70px;
    
    @media (max-width: 768px) {
      left: 10px;
    }
  }
`;

const TimelineDate = styled.div`
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`;

const TimelineTitle = styled.h3`
  margin: 5px 0;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
`;

const TimelineSubtitle = styled.h4`
  margin: 5px 0;
  color: ${(props) => props.theme.text};
  font-weight: normal;
  font-style: italic;
  opacity: 0.8;
  font-size: 1rem;
`;

const TimelineDescription = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 10px;
`;

const Badge = styled.span`
  background-color: ${props => props.type === "education" ? "#3498db" : "#e74c3c"};
  color: white;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

const Timeline = () => {
  const timelineData = [
    {
      type: "education",
      date: "September 2021 – June 2025",
      title: "Bachelor of Science (Hons) in Software Design with AI for Cloud Computing",
      subtitle: "Technology University of the Shannon (TUS), Athlone, Ireland",
      description: "Achieved a GPA of 78.58 for year 1, 75.08 for year 2 and 79.83 for year 3. Specialized in cloud architectures, DevOps practices, and AI implementation."
    },
    {
      type: "experience",
      date: "January – May 2025",
      title: "IT Intern",
      subtitle: "Technology University of the Shannon (TUS)",
      description: "Worked on multiple client-facing projects including a Server-Side Web and Mobile Application for a Meat Supplier Client. Implemented real-time tracking and automated inventory management systems."
    },
    {
      type: "experience",
      date: "March 2022 – January 2025",
      title: "Food & Beverage Team Leader",
      subtitle: "Sheraton Athlone Hotel",
      description: "Led a team of up to 20 staff across banquets and restaurant settings, ensuring smooth service for events hosting up to 400 guests. Developed leadership, communication, and problem-solving skills."
    },
    {
      type: "education",
      date: "January 2020 – December 2020",
      title: "Foundation in Science",
      subtitle: "Nilai University, Nilai, Malaysia",
      description: "Advanced knowledge and skills in science related subjects, business and information technology. Achieved Distinction with top marks in mathematics and computing modules."
    },
    {
      type: "experience",
      date: "March 2022 – January 2025",
      title: "Day Porter",
      subtitle: "Sheraton Athlone Hotel",
      description: "Delivered exceptional guest services, providing room assistance, and preparing meeting spaces for events. Enhanced customer service skills and attention to detail."
    }
  ];

  return (
    <SectionContainer id="timeline">
      <ContentWrapper>
        <SectionTitle 
          as={motion.h2}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Experience & Education
        </SectionTitle>
        <TimelineWrapper>
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineContent
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Badge type={item.type}>
                  {item.type}
                </Badge>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
              <TimelineIcon>
                {item.type === "education" ? <FaGraduationCap size={22} /> : <FaBriefcase size={20} />}
              </TimelineIcon>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default Timeline;
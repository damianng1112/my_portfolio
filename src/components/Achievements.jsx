import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { SectionContainer, ContentWrapper, SectionTitle } from "./StyledComponents";

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;

const AchievementCard = styled(motion.div)`
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const CertImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%; /* Fixed aspect ratio */
  background: #141414;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%);
    pointer-events: none;
  }
`;

const CertImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Changed from cover to contain */
  object-position: center;
  transition: transform 0.5s ease;
  padding: 1rem;
  background: #0f0f0f;
  
  ${AchievementCard}:hover & {
    transform: scale(1.05);
  }
`;

const AchievementContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AchievementTitle = styled.h3`
  font-size: 1.1rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const AchievementMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AchievementIssuer = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 6px;
  }
`;

const AchievementDate = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.text};
  opacity: 0.7;
`;

const VerifyLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 4px;
  color: ${(props) => props.theme.primary};
  font-size: 0.85rem;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
  
  svg {
    margin-left: 6px;
  }
  
  &:hover {
    background: ${(props) => props.theme.primary};
    color: #fff;
  }
`;

// Modal components for expanded view
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: #1e1e1e;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  background: #0f0f0f;
  padding: 2rem;
`;

const ModalDetails = styled.div`
  padding: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
`;

const ModalMeta = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  color: ${(props) => props.theme.text};
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  background: rgba(142, 68, 173, 0.15);
  color: ${(props) => props.theme.primary};
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  
  &:hover {
    background: #e74c3c;
  }
`;

// Certificate data with more detailed information
const achievementsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS Training and Certification",
    date: "Apr 20, 2025",
    verifyUrl: "https://www.credly.com/badges/8148c6e5-b042-4c1c-808a-6f617f76c891/public_url",
    image: "/certificates/aws-certified-cloud-practitioner.png",
    description: "The AWS Certified Cloud Practitioner validates foundational knowledge of AWS Cloud architecture, services, security, and compliance. This certification demonstrates understanding of AWS core services, billing and pricing models, basic security practices, and the shared responsibility model for cloud security.",
    skills: ["AWS", "Cloud Architecture", "Security", "Cost Management", "Global Infrastructure"]
  },
  {
    title: "Best Practices for Building Container Images",
    issuer: "IBM",
    date: "Mar 25, 2025",
    verifyUrl: "https://www.credly.com/badges/05957201-f91d-4d47-b8f1-18f72f725143",
    image: "/certificates/digital_sticker_Best Practices for Building Container Images.png",
    description: "This certification validates expertise in container image optimization, including multi-stage builds, layer optimization, and security best practices. The program covered image size reduction, vulnerability scanning, and efficient CI/CD integration for containerized applications.",
    skills: ["Docker", "Containerization", "CI/CD", "Image Security"]
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "IBM",
    date: "Mar 19, 2025",
    verifyUrl: "https://skills.yourlearning.ibm.com/certificate/share/1de52b9e25ewogICJsZWFybmVyQ05VTSIgOiAiNDQ3NzUwMFJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIk1ETC01NjgiCn092c9d1288c-10",
    image: "/certificates/Digital Sticker_Introduction to Large Language Models.png",
    description: "Comprehensive introduction to the foundations of Large Language Models (LLMs), covering transformer architectures, prompt engineering, fine-tuning techniques, and ethical considerations in AI development. Included hands-on projects with popular models like GPT and BERT.",
    skills: ["Machine Learning", "NLP", "Prompt Engineering", "AI Ethics"]
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM",
    date: "Mar 27, 2025",
    verifyUrl: "https://www.credly.com/badges/1c6238b6-a8a0-40fa-8510-63c472914570/public_url",
    image: "/certificates/cloud-computing-fundamentals.png",
    description: "This certification demonstrates proficiency in cloud computing concepts, including IaaS, PaaS, and SaaS models, virtualization technologies, and multi-cloud strategies. Topics covered include cloud security, deployment models, and best practices for cloud-based applications.",
    skills: ["AWS", "Cloud Architecture", "Virtualization", "Microservices"]
  },
  // Add more certificates here in the future
];

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <SectionContainer id="achievements">
      <ContentWrapper>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Achievements & Certifications
        </SectionTitle>
        <AchievementsGrid>
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={index}
              onClick={() => openModal(achievement)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <CertImageContainer>
                <CertImage src={achievement.image} alt={achievement.title} />
              </CertImageContainer>
              <AchievementContent>
                <AchievementTitle>{achievement.title}</AchievementTitle>
                <AchievementMeta>
                  <AchievementIssuer>
                    <FaAward /> {achievement.issuer}
                  </AchievementIssuer>
                  <AchievementDate>{achievement.date}</AchievementDate>
                </AchievementMeta>
                <VerifyLink
                  href={achievement.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.05 }}
                >
                  Verify <FaExternalLinkAlt />
                </VerifyLink>
              </AchievementContent>
            </AchievementCard>
          ))}
        </AchievementsGrid>

        <AnimatePresence>
          {selectedCert && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <ModalContent
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={closeModal}>✕</CloseButton>
                <ModalImage src={selectedCert.image} alt={selectedCert.title} />
                <ModalDetails>
                  <ModalTitle>{selectedCert.title}</ModalTitle>
                  <ModalMeta>
                    <AchievementIssuer>
                      <FaAward /> {selectedCert.issuer}
                    </AchievementIssuer>
                    <AchievementDate>{selectedCert.date}</AchievementDate>
                  </ModalMeta>
                  <ModalDescription>{selectedCert.description}</ModalDescription>
                  
                  <TechStack>
                    {selectedCert.skills.map((skill, idx) => (
                      <TechBadge key={idx}>
                        {skill}
                      </TechBadge>
                    ))}
                  </TechStack>
                  
                  <VerifyLink
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    Verify Certificate <FaExternalLinkAlt />
                  </VerifyLink>
                </ModalDetails>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default Achievements;
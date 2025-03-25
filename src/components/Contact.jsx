import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.secondary};
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  max-width: 350px;
`;

const ContactForm = styled.div`
  flex: 1;
  max-width: 500px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1e1e1e;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${(props) => props.theme.primary};
    color: #fff;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
  
  svg {
    margin-right: 10px;
    color: ${(props) => props.theme.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 5px;
  background: #1e1e1e;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #333;
  border-radius: 5px;
  background: #1e1e1e;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.theme.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${(props) => props.theme.primary + 'cc'};
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Get In Touch
      </Title>

      <ContactContent>
        <ContactInfo>
          <SocialLinks>
            <SocialLink href="https://github.com/damianng1112" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
              <FaGithub size={24} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/wye-zhen-ng-541058220/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
              <FaLinkedin size={24} />
            </SocialLink>
          </SocialLinks>

          <InfoItem>
            <FaEnvelope />
            <span>damianng1112@gmail.com</span>
          </InfoItem>

          <InfoItem>
            <FaPhone />
            <span>+353 87 186 5791</span>
          </InfoItem>

          <InfoItem>
            <FaMapMarkerAlt />
            <span>27 Thornbury Drive, Meadowbrook, Athlone</span>
          </InfoItem>
        </ContactInfo>

        <ContactForm>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" name="message" required />
            </FormGroup>

            <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Send Message
            </SubmitButton>
          </form>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};


export default Contact;
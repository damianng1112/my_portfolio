import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { SectionContainer, ContentWrapper, SectionTitle } from "./StyledComponents";

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  max-width: 350px;
`;

const ContactForm = styled.div`
  flex: 1;
  max-width: 500px;
  width: 100%;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: ${(props) => props.theme.primary};
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.text};
  
  svg {
    margin-right: 15px;
    color: ${(props) => props.theme.primary};
    font-size: 1.2rem;
  }
  
  span {
    font-size: 1rem;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.text};
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid ${props => props.error ? "#e74c3c" : "#333"};
  border-radius: 5px;
  background: #1e1e1e;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? "#e74c3c" : props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.error ? "rgba(231, 76, 60, 0.2)" : "rgba(142, 68, 173, 0.2)"};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid ${props => props.error ? "#e74c3c" : "#333"};
  border-radius: 5px;
  background: #1e1e1e;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? "#e74c3c" : props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.error ? "rgba(231, 76, 60, 0.2)" : "rgba(142, 68, 173, 0.2)"};
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled(motion.button)`
  padding: 0.85rem 1.5rem;
  background: ${(props) => props.theme.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  
  &:hover {
    background: ${(props) => props.theme.primary + 'dd'};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: #2ecc71;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <SectionContainer id="contact">
      <ContentWrapper>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </SectionTitle>

        <ContactContent>
          <ContactInfo>
            <SocialLinks>
              <SocialLink 
                href="https://github.com/damianng1112" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub size={24} />
              </SocialLink>
              <SocialLink 
                href="https://www.linkedin.com/in/wye-zhen-ng-541058220/" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin size={24} />
              </SocialLink>
            </SocialLinks>

            <InfoItem>
              <FaEnvelope />
              <span>damianngwyezhen@gmail.com</span>
            </InfoItem>

            <InfoItem>
              <FaPhone />
              <span>+353 87 186 5791</span>
            </InfoItem>

            <InfoItem>
              <FaMapMarkerAlt />
              <span>45 Willow Park Road, Kilmacuagh, Athlone</span>
            </InfoItem>
          </ContactInfo>

          <ContactForm>
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Thanks for your message! I'll get back to you soon.
              </SuccessMessage>
            )}
            
            <Form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />

              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                />
                {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
              </FormGroup>

              <SubmitButton 
                type="submit" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
              </SubmitButton>
            </Form>
          </ContactForm>
        </ContactContent>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default Contact;
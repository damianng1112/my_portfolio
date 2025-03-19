import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.background};
  display: flex;
  overflow: hidden;
  padding: 2rem;
  text-align: center;
  color: ${(props) => props.theme.text};
  border-top: 1px solid #333;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <p>&copy; {currentYear} Wye Zhen Ng. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
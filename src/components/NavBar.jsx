import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  background: ${(props) => props.scrolled ? props.theme.background : "transparent"};
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${(props) => props.scrolled ? "0 5px 15px rgba(0, 0, 0, 0.1)" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${(props) => props.theme.primary};
  }
  
  &.active {
    color: ${(props) => props.theme.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 99;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileNavLink = styled(motion.a)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Determine active section
      const sections = document.querySelectorAll("section, div[id]");
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust this value according to your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };
  
  return (
    <>
      <NavContainer scrolled={scrolled}>
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={(e) => handleNavLinkClick(e, "home")}
        >
          Wye Zhen Ng
        </Logo>
        
        <NavLinks>
          <NavLink 
            href="#home" 
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => handleNavLinkClick(e, "home")}
          >
            Home
          </NavLink>
          <NavLink 
            href="#about" 
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => handleNavLinkClick(e, "about")}
          >
            About
          </NavLink>
          <NavLink 
            href="#skills" 
            className={activeSection === "skills" ? "active" : ""}
            onClick={(e) => handleNavLinkClick(e, "skills")}
          >
            Skills
          </NavLink>
          <NavLink 
            href="#timeline" 
            className={activeSection === "timeline" ? "active" : ""}
            onClick={(e) => handleNavLinkClick(e, "timeline")}
          >
            Experience
          </NavLink>
          <NavLink 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""}
            onClick={(e) => handleNavLinkClick(e, "projects")}
          >
            Projects
          </NavLink>
          <NavLink 
            href="#achievements" 
            className={activeSection === "achievements" ? "active" : ""}
            onClick={(e) => handleNavLinkClick(e, "achievements")}
          >
            Achievements
          </NavLink>
          <NavLink 
            href="#interest" 
            className={activeSection === "interest" ? "active" : ""}
            onClick={(e) => handleNavLinkClick(e, "interest")}
          >
            Interest
          </NavLink>
          <NavLink 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => handleNavLinkClick(e, "contact")}
          >
            Contact
          </NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </MobileMenuButton>
      </NavContainer>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <CloseButton onClick={() => setMobileMenuOpen(false)}>
            <FaTimes />
          </CloseButton>
          
          <MobileNavLink 
            href="#home" 
            onClick={(e) => handleNavLinkClick(e, "home")}
          >
            Home
          </MobileNavLink>
          <MobileNavLink 
            href="#about" 
            onClick={(e) => handleNavLinkClick(e, "about")}
          >
            About
          </MobileNavLink>
          <MobileNavLink 
            href="#skills" 
            onClick={(e) => handleNavLinkClick(e, "skills")}
          >
            Skills
          </MobileNavLink>
          <MobileNavLink 
            href="#timeline" 
            onClick={(e) => handleNavLinkClick(e, "timeline")}
          >
            Experience
          </MobileNavLink>
          <MobileNavLink 
            href="#projects" 
            onClick={(e) => handleNavLinkClick(e, "projects")}
          >
            Projects
          </MobileNavLink>
          <MobileNavLink href="#achievements" onClick={(e) => handleNavLinkClick(e, "achievements")}>
            Achievements
          </MobileNavLink>
          <MobileNavLink 
            href="#contact" 
            onClick={(e) => handleNavLinkClick(e, "contact")}
          >
            Contact
          </MobileNavLink>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar;
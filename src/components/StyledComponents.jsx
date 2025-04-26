import styled from "styled-components";

export const ContentWrapper = styled.div`
  background: rgba(18, 18, 18, 0.8); /* Dark, semi-transparent background */
  padding: 2rem;
  border-radius: 10px;
  max-width: 1100px;
  width: 100%;
  margin: auto; /* Center the wrapper */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  backdrop-filter: blur(5px); /* Creates a frosted glass effect */
  -webkit-backdrop-filter: blur(5px); /* For Safari support */
  border: 1px solid rgba(142, 68, 173, 0.1); /* Subtle border using primary color */
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 25px rgba(142, 68, 173, 0.15); /* Glow effect on hover using primary color */
  }
`;

// Section container with proper spacing and padding
export const SectionContainer = styled.div`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: transparent;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

// Consistent section title styling
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 4px;
    background: ${(props) => props.theme.primary};
    border-radius: 2px;
  }
`;

// Text content with consistent styling
export const TextContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.text};
  margin-bottom: 1.5rem;
`;
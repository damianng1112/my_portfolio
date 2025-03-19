import styled from "styled-components";

export const ContentWrapper = styled.div`
  background: rgba(18, 18, 18, 0.8); /* Dark, semi-transparent background */
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px;
  margin: auto; /* Center the wrapper */
  color: ${(props) => props.theme.text}; /* Use theme's text color */
`;
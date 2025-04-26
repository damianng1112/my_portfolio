import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Particles from "./components/ParticleEffect";
import SEOHead from "./components/SEOHead";
import styled from "styled-components";

// Import lazy-loaded components
import {
  LazyAbout,
  LazySkills,
  LazyProjects,
  LazyTimeline,
  LazyAchievements,
  LazyInterest,
  LazyContact
} from './lazyComponents';

// Style for the main content container
const MainContainer = styled.main`
  position: relative;
  min-height: 100vh;
`;

// Loading indicator for sections that might be loading
const LoadingFallback = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;
  color: ${props => props.theme.primary};
  font-size: 1.2rem;
`;

function App() {
  return (
    <MainContainer>
      <SEOHead />
      <Particles />
      <Navbar />
      
      {/* Home is not lazy loaded as it's the first thing visitors see */}
      <section id="home">
        <Home />
      </section>
      
      {/* Wrap each section in its own Suspense boundary */}
      <Suspense fallback={
        <LoadingFallback
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </LoadingFallback>
      }>
        <section id="about">
          <LazyAbout />
        </section>
      </Suspense>
      
      <Suspense fallback={
        <LoadingFallback
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </LoadingFallback>
      }>
        <section id="skills">
          <LazySkills />
        </section>
      </Suspense>
      
      <Suspense fallback={
        <LoadingFallback
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </LoadingFallback>
      }>
        <section id="timeline">
          <LazyTimeline />
        </section>
      </Suspense>
      
      <Suspense fallback={
        <LoadingFallback
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </LoadingFallback>
      }>
        <section id="projects">
          <LazyProjects />
        </section>
      </Suspense>
      
      <Suspense fallback={
        <LoadingFallback
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </LoadingFallback>
      }>
        <section id="achievements">
          <LazyAchievements />
        </section>
      </Suspense>
      
      <Suspense fallback={
        <LoadingFallback
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </LoadingFallback>
      }>
        <section id="interest">
          <LazyInterest />
        </section>
      </Suspense>
      
      <Suspense fallback={
        <LoadingFallback
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </LoadingFallback>
      }>
        <section id="contact">
          <LazyContact />
        </section>
      </Suspense>
      
      <Footer />
    </MainContainer>
  );
}

export default App;
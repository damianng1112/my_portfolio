import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Damian Wye Zhen Ng | Full-Stack Developer & AI Specialist</title>
      <meta name="description" content="Portfolio of Damian Wye Zhen Ng, a Full-Stack Developer and AI Specialist with expertise in cloud computing, DevOps, and web development." />
      <meta name="keywords" content="Damian Ng, Wye Zhen Ng, Web Developer, Full-Stack Developer, Software Engineer, AI, Cloud Computing, React Developer, Portfolio" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://damianngportfolio.netlify.app/" />
      <meta property="og:title" content="Damian Wye Zhen Ng | Full-Stack Developer & AI Specialist" />
      <meta property="og:description" content="Full-Stack Developer and AI Specialist with expertise in cloud computing, DevOps, and web development." />
      <meta property="og:image" content="/og-image.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://damianngportfolio.netlify.app/" />
      <meta property="twitter:title" content="Damian Wye Zhen Ng | Full-Stack Developer & AI Specialist" />
      <meta property="twitter:description" content="Full-Stack Developer and AI Specialist with expertise in cloud computing, DevOps, and web development." />
      <meta property="twitter:image" content="/og-image.jpg" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8E44AD" />
      <meta name="author" content="Damian Wye Zhen Ng" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://damianngportfolio.netlify.app/" />
    </Helmet>
  );
};

export default SEOHead;
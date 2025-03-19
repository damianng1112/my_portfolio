import React, { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";

const ParticlesBackground = () => {
  useEffect(() => {
    (async () => {
      await loadLinksPreset(tsParticles); // Load the "links" preset

      await tsParticles.load({
        id: "tsparticles",
        options: {
          preset: "links",
          particles: {
            shape: { type: "square" }, // Customize the shape
            color: { value: "#ffffff" }, // Particle color
            move: { speed: 2 }, // Adjust speed
          },
          background: { color: "#121212" }, // Ensure it matches your dark theme
        },
      });
    })();
  }, []);

  return <div id="tsparticles" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} />;
};

export default ParticlesBackground;

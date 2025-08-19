import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#1a1a1a" },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          size: { value: { min: 1, max: 4 }, random: true },
          move: { enable: true, speed: 2 },
          links: { enable: true, distance: 150, color: "#00f0ff", opacity: 0.3 }
        }
      }}
    />
  );
};

export default ParticlesBackground;

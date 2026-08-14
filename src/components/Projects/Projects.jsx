import { projects } from '../../data/projects.js';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
// import projectPic from '../../../assets/projects/project.png';

const Projects = () => {
  //   const getImageUrl = (name) => `../../assets/projects/${name}`;
  const [centerIdx, setCenterIdx] = useState(0);

  const scrollLeft = () => {
    setCenterIdx((prev) => {
      return (prev - 1 + projects.length) % projects.length;
    });
  };

  const scrollRight = () => {
    setCenterIdx((prev) => {
      return (prev + 1) % projects.length;
    });
  };

  const getRelativePosition = (index) => {
    let position = index - centerIdx;

    /*
     * Makes the positions wrap around so the rack behaves
     * like a circular carousel.
     */
    const half = Math.floor(projects.length / 2);

    if (position > half) {
      position -= projects.length;
    }

    if (position < -half) {
      position += projects.length;
    }

    return position;
  };

  const getCardStyle = (position) => {
    const distance = Math.abs(position);

    /*
     * Only visually emphasize cards within two positions
     * of the center.
     */
    if (distance > 2) {
      return {
        '--x': `${position * 220}px`,
        '--z': '-300px',
        '--rotate': `${position * -30}deg`,
        '--scale': '0.65',
        '--z-index': '0',
        '--opacity': '0',
      };
    }

    return {
      '--x': `${position * 220}px`,
      '--z': `${20 - distance * 90}px`,
      '--rotate': `${position * -22}deg`,
      '--scale': `${1 - distance * 0.1}`,
      '--z-index': `${10 - distance}`,
      '--opacity': '1',
    };
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>PROJECT</h2>
      <div className={styles.rackContainer}>
        {/* Left Nav */}
        <button
          className={`${styles.scrollButton} ${styles.leftButton}`}
          onClick={scrollLeft}
          aria-label="Previous project"
        >
          ←
        </button>
        <div className={styles.rack}>
          {projects.map((project, idx) => {
            const position = getRelativePosition(idx);
            return (
              <ProjectCard key={project.title} project={project} position={position} style={getCardStyle(position)} />
            );
          })}
        </div>
        {/* Right navigation area */}
        <button
          className={`${styles.scrollButton} ${styles.rightButton}`}
          onClick={scrollRight}
          aria-label="Next project"
        >
          →
        </button>
      </div>
      {/* <div className={styles.projectsContainer}>
        <div className={styles.projects}>
          {projects.map((project, idx) => {
            return (
              <ProjectCard key={project.title} project={projects} position={idx - Math.floor(projects.length / 2)} />
            );
          })}
        </div>
      </div> */}
    </section>
  );
};

export default Projects;

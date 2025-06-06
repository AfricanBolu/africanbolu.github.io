import 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
// import projectPic from '../../../assets/projects/project.png';

const Projects = () => {
  //   const getImageUrl = (name) => `../../assets/projects/${name}`;
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>PROJECT</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

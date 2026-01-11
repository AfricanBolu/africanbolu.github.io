// Skills.jsx

import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>SKILLS & TECHNOLOGIES</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.category}>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>APIs</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h3>Tools & Other</h3>
          <ul>
            <li>Git/GitHub</li>
            <li>VS Code</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
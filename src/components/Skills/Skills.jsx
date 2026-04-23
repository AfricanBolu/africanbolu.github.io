// Skills.jsx

import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Tech Stack</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.category}>
          <h3>Web Development</h3>
          <ul>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Python</li>
            <li>Java / Spring Boot</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h3>AI & Machine Learning</h3>
          <ul>
            <li>LangChain</li>
            <li>OpenAI</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Computer Vision</li>
          </ul>
        </div>
        <div className={styles.category}>
          <h3>Tools & Other</h3>
          <ul>
            <li>Git/GitHub</li>
            <li>VS Code</li>
            <li>PostgreSQL</li>
            <li>CI/CD Pipeline</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

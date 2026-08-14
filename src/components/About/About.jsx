/** @format */

import styles from './About.module.css';
import profilePic from '../../assets/hero/profile-pic.png';
import { CodeIcon, DatabaseIcon, CpuIcon } from '@phosphor-icons/react';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img src={profilePic} alt="about-img" className={styles.aboutPic} />
        <ul className={styles.aboutContent}>
          <li className={styles.aboutText}>
            <div className={styles.iconWrapper}>
              <CodeIcon size={45} color="#19376d" weight="bold" />
            </div>
            <div className={styles.aboutItems}>
              <h3>Software Engineer</h3>
              <p>
                I build tested, end-to-end applications across the frontend, backend, and everything in between. I enjoy
                turning ambiguous problems into reliable software and owning projects from architecture through
                delivery.
              </p>
            </div>
          </li>
          <li className={styles.aboutText}>
            <div className={styles.iconWrapper}>
              <DatabaseIcon size={45} color="#19376d" weight="bold" />
            </div>
            <div className={styles.aboutItems}>
              <h3>Backend & Systems</h3>
              <p>
                I build APIs, data pipelines, and backend systems with an emphasis on reliability, performance, and
                maintainability. I&apos;m particularly interested in understanding how systems work under the hood and
                designing software that is easy to reason about.
              </p>
            </div>
          </li>
          <li className={styles.aboutText}>
            <div className={styles.iconWrapper}>
              <CpuIcon size={45} color="#19376d" weight="bold" />
            </div>
            <div className={styles.aboutItems}>
              <h3>AI-Powered Applications</h3>
              <p>
                I build practical AI systems using LLMs, RAG, semantic search, and agentic workflows. My focus is on
                turning AI capabilities into useful applications with measurable results, rather than using AI simply
                for the sake of using it.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

/** @format */

import 'react';
import styles from './About.module.css';
import profilePic from '../../assets/hero/profile-pic.png';
import {CodeIcon, DatabaseIcon, CpuIcon } from '@phosphor-icons/react';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img src={profilePic} alt="about-img" className={styles.aboutPic} />
        <ul className={styles.aboutContent}>
          <li className={styles.aboutText}>
            <div className={styles.iconWrapper}>
              <CodeIcon size={45} color='#0490fb' weight="bold" />
            </div>
            <div className={styles.aboutItems}>
              <h3>Software Engineer</h3>
              <p>
                I build maintainable software with clean architecture and great UX. 
                I love diving deep into application logic and understanding systems from the ground up.
              </p>
            </div>
          </li>
          <li className={styles.aboutText}>
            <div className={styles.iconWrapper}>
              <DatabaseIcon size={45} color='#0490fb' weight="bold" />
            </div>
            <div className={styles.aboutItems}>
              <h3>Backend & Systems</h3>
              <p>
                I design APIs, optimize data flow, and build reliable backend systems. 
                My focus is on performance, concurrency, and creating systems that are easy to reason about.
              </p>
            </div>
          </li>
          <li className={styles.aboutText}>
            <div className={styles.iconWrapper}>
              <CpuIcon size={45} color='#0490fb' weight="bold" />
            </div>
            <div className={styles.aboutItems}>
              <h3>AI-Powered Applications</h3>
              <p>
                I integrate AI capabilities into practical applications for automation and user-facing tools. 
                I focus on real-world implementation rather than research-level development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

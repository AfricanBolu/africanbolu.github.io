/** @format */

import 'react';
import styles from './About.module.css';
// import { getImageUrl } from '../../utils';
import profilePic from '../../../assets/hero/profile-pic.png';
import cursor from '../../../assets/about/cursorIcon.png';
import server from '../../../assets/about/serverIcon.png';
import ui from '../../../assets/about/uiIcon.png';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <img src={profilePic} alt="about-img" className={styles.aboutPic} />
        <ul className={styles.aboutContent}>
          <li className={styles.aboutText}>
            <img src={cursor} alt="cursor-icon" className={styles.cursor} />
            <div className={styles.aboutItems}>
              <h3>Frontend Developer</h3>
              <p>wordswordswordswords</p>
            </div>
          </li>
          <li className={styles.aboutText}>
            <img src={server} alt="server-icon" className={styles.cursor} />
            <div className={styles.aboutItems}>
              <h3>Backend Developer</h3>
              <p>wordswordswordswords</p>
            </div>
          </li>
          <li className={styles.aboutText}>
            <img src={ui} alt="ui-icon" className={styles.cursor} />
            <div className={styles.aboutItems}>
              <h3>Fullstack Developer</h3>
              <p>wordswordswordswords</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

/* eslint-disable react/no-unescaped-entities */
/** @format */

import 'react';
import styles from './Hero.module.css';
// import { getImageUrl } from '../../utils';
import heroPic from '../../assets/hero/Bolu-pic.png';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bolu</h1>
        <p className={styles.description}>I'm a fullstack developer, who likes to build things with code.</p>
        <a href="mailto:oboluodianosen@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <div className={styles.heroImgContainer}>
        <img src={heroPic} alt="hero-img" className={styles.heroImg} />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;

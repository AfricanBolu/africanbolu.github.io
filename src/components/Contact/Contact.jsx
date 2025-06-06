import 'react';
import styles from './Contact.module.css';
import contactPic from '../../../assets/contact/emailIcon.png';
import linkedinPic from '../../../assets/contact/linkedinIcon.png';
import githubPic from '../../../assets/contact/githubIcon.png';

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.content}>
        <h2>Contact</h2>
        <p>wordswordswordswords</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={contactPic} alt="contact-img" />
          <a href="mailto:oboluodianosen@gmail.com" target="_blank">
            Email
          </a>
        </li>
        <li className={styles.link}>
          <img src={linkedinPic} alt="linkedin-img" />
          <a href="https://www.linkedin.com/in/bolu-odia" target="_blank">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubPic} alt="github-img" />
          <a href="https://github.com/AfricanBolu" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

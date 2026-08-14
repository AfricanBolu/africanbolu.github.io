import styles from './Contact.module.css';
import contactPic from '../../assets/contact/emailIcon.png';
import linkedinPic from '../../assets/contact/linkedinIcon.png';
import githubPic from '../../assets/contact/githubIcon.png';

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.content}>
        <h2>Contact</h2>
        <h3>Let&apos;s Build Something</h3>
        <p>I&apos;m open to software engineering opportunities and interesting projects. Let&apos;s connect.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={contactPic} alt="email icon" />
          <a href="mailto:oboluodianosen@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </li>
        <li className={styles.link}>
          <img src={linkedinPic} alt="linkedin-img" />
          <a href="https://www.linkedin.com/in/bolu-odia" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubPic} alt="github-img" />
          <a href="https://github.com/bolemonrin" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

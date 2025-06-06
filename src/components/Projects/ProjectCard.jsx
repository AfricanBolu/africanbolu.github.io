import 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project: { title, img, desc, stack, demo, source } }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt={`Temp image of ${title} `} className={styles.projectPic} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
      <ul className={styles.stack}>
        {stack.map((stack, id) => (
          <li key={id} className={styles.stackItem}>
            {stack}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.linkBtn}>
          Demo
        </a>
        <a href={source} className={styles.linkBtn}>
          Source
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired, // Add this line
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;

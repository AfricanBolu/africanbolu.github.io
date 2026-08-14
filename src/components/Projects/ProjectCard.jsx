import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project: { title, img, desc, stack, demo, source, url } }) => {
  function openLink() {
    console.log(url);
    window.open(url, '_blank');
  }
  return (
    <div className={styles.container} onClick={openLink}>
      <img src={img} alt={`Image of project ${title} `} className={styles.projectPic} />
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
        <a href={demo} className={styles.linkBtn} target="_blank">
          Demo
        </a>
        <a href={source} className={styles.linkBtn} target="_blank">
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
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;

import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, position, style }) => {
  const { title, img, desc, stack, demo, source, url } = project;
  const openLink = () => {
    console.log(url);
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article className={styles.card} style={style} onClick={openLink} data-position={position}>
      <img src={img} alt={`Image of project ${title} `} className={styles.projectPic} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
      {/* <div className={styles.stack}>
        {stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div> */}
      <div className={styles.content}>
        <ul className={styles.stack}>
          {stack.map((stack, id) => (
            <li key={id} className={styles.stackItem}>
              {stack}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          {demo && (
            <a
              href={demo}
              className={styles.linkBtn}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Demo
            </a>
          )}

          {source && (
            <a
              href={source}
              className={styles.linkBtn}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
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
  position: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default ProjectCard;

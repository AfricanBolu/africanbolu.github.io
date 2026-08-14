// /** @format */

// import 'react';
// // import { getImageUrl } from '../../utils';
// import { experiences } from '../../data/experience';
// import styles from './Experience.module.css';
// import { useState } from 'react';

// const Experience = () => {
//   const [activeIdx, setActiveIdx] = useState(0);
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.heading}>Where I&apos;ve Worked</h2>
//       <div className={styles.inner}>
//         {/*Company tabs*/}
//         <div className={styles.tabs} role="tablist" aria-label="Work experience">
//           {experiences.map((exp, idx) => {
//             return (
//               <button
//                 key={exp.company}
//                 className={`${styles.tab} ${activeIdx === idx ? styles.active : ''}`}
//                 onClick={() => setActiveIdx(idx)}
//                 role="tab"
//                 aria-selected={activeIdx === idx}
//                 aria-controls={`experience-panel-${idx}`}
//               >
//                 {exp.company}
//               </button>
//             );
//           })}
//         </div>

//         {/*Expreince Content*/}
//         <div className={styles.panels}>
//           {experiences.map((exp, idx) => {
//             return (
//               <div
//                 key={exp.company}
//                 className={`${styles.panel} ${activeIdx === idx ? styles.panelActive : ''}`}
//                 id={`experience-panel-${idx}`}
//                 role="tabpanel"
//                 aria-hidden={activeIdx !== idx}
//                 hidden={activeIdx !== idx}
//               >
//                 <h3 className={styles.role}>
//                   {exp.role}{' '}
//                   <span>
//                     {' '}
//                     @{' '}
//                     <a href={exp.url} target="_blank" rel="noopener noreferrer">
//                       {exp.company}
//                     </a>
//                   </span>
//                 </h3>
//                 <p className={styles.date}>{exp.date}</p>
//                 <ul>
//                   {exp.desc.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import { useState } from 'react';
import { experiences } from '../../data/experience';
import styles from './Experience.module.css';

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeExperience = experiences[activeIdx];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.heading}>Experience</h2>

      <div className={styles.experience}>
        {/* Company selector */}
        <div className={styles.tabs} role="tablist">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              className={`${styles.tab} ${
                activeIdx === idx ? styles.active : ''
              }`}
              onClick={() => setActiveIdx(idx)}
              role="tab"
              aria-selected={activeIdx === idx}
            >
              {exp.company}
            </button>
          ))}

          <span
            className={styles.indicator}
            style={{
              transform: `translateY(${activeIdx * 100}%)`,
            }}
          />
        </div>

        {/* Active experience */}
        <div className={styles.content} key={activeIdx}>
          <h3 className={styles.role}>
            {activeExperience.role}
            <span>
              {' '}
              @{' '}
              <a
                href={activeExperience.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {activeExperience.company}
              </a>
            </span>
          </h3>

          <p className={styles.date}>{activeExperience.date}</p>

          <ul className={styles.description}>
            {activeExperience.desc.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

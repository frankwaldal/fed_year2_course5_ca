import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import githubIcon from '../../Assets/githubIcon.svg';
import linkedinIcon from '../../Assets/LI-In-Bug.png';

export default function Footer({ toggleContactFormOpen }) {
  return (
    <footer>
      <p onClick={toggleContactFormOpen}>
        <FontAwesomeIcon icon='envelope-open' style={{ marginRight: '5px' }} /> Send an email <FontAwesomeIcon icon='chevron-right' />
      </p>
      <p>
        <a href='https://github.com/frankwaldal?tab=repositories' target='_blank' rel='noopener noreferrer'>
          <img src={githubIcon} alt='Github Icon' />Github <FontAwesomeIcon icon='chevron-right' />
        </a>
      </p>
      <p>
        <a href='https://www.linkedin.com/in/frank-waldal-698072191/' target='_blank' rel='noopener noreferrer'>
          <img src={linkedinIcon} alt='LinkedIn Icon' />LinkedIn <FontAwesomeIcon icon='chevron-right' />
         </a>
       </p>
    </footer>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import codeImage from '../../Assets/codeScreenshot.JPG';

export default function FrontPage() {
  return (
    <main className='frontPage'>
      <div className='spacing' />
      <div className='intro'>
        <h1>Welcome to fwaldal.no, a site about me, Frank Waldal, an aspiring Frontend Developer.</h1>
        <div className='introButtons'>
          <button><Link to='/work'>See some of my previous work <FontAwesomeIcon icon='chevron-right' /></Link></button>
          <button><Link to='/experience'>My work experience and education <FontAwesomeIcon icon='chevron-right' /></Link></button>
        </div>
      </div>
      <img src={codeImage} alt='Screenshot from codesnippet' />
    </main>
  )
}

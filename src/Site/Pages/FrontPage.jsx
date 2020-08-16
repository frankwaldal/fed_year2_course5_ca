import React from 'react';

import codeImage from '../../Assets/codeScreenshot.JPG';

export default function FrontPage() {
  return (
    <main className='frontPage'>
      <div style={{gridColumn: 'span 2', height: '20px'}} />
      <div>
        
      </div>
      <img src={codeImage} alt='Screenshot from codesnippet' />
    </main>
  )
}

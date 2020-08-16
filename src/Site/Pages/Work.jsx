import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { previewData } from '../Constants/previewData';

import Enp from '../../Assets/enpScreenshot.jpg';
import MistMountain from '../../Assets/mistMountainScreenshot.jpg';
import HomeDecor from '../../Assets/homeDecorScreenshot.jpg';
import Letha from '../../Assets/lethaScreenshot.jpg';
import Museum from '../../Assets/museumScreenshot.jpg';
import MarsAdventure from '../../Assets/marsAdventureScreenshot.jpg';

export default function Work() {
  const images = {
    enp: Enp,
    mistMountain: MistMountain,
    homeDecor: HomeDecor,
    letha: Letha,
    museum: Museum,
    marsAdventure: MarsAdventure
  }

  const [showShade, setShowShade] = useState(false);
  const enlargeImage = e => {
    e.target.classList.toggle('enlargedImage');
    setShowShade(!showShade);
  }
  return (
    <main>
      <h2>Previous projects and assignments</h2>
      <div className='projectGrid'>
        {previewData.map(project => {
          return (
            <div key={project.title} className='project'>
              <img src={images[project.image]} alt={project.title} onClick={enlargeImage}/>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.url !== '' ? <p><a href={project.url} target='_blank' rel='noopener noreferrer'>{project.title} <FontAwesomeIcon icon='chevron-right' /></a></p> : null}
              </div>
            </div>
          )
        })}
      </div>
      {showShade && <div id='shade' />}
    </main>
  )
}

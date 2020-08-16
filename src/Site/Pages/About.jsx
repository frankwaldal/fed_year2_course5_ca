import React from 'react';

import FrankImage from '../../Assets/frank.jpg';

export default function About() {
  return (
    <main className='about'>
      <h2>Frank Waldal</h2>
      <img src={FrankImage} alt='Frank Waldal' />
      <div>
        <p>I currently work as a Frontend Developer at Entur AS, creating the new salesclient for the trainstations and customer service at SJ, Go Ahead and Vy.</p>
        <p>I have allways had a fond interest in technology and wanting to understand how things fit together, because of this, I set a goal when starting at NSB (now Entur) customer service back in 2015, I wanted to go through the ranks and eventuelly start working with the systems used at the customer service.</p>
        <p>When a new techinal Support team were created December 2017, I joined this team.</p>
        <p>This work gave me more insight in how the backend and frontend worked togheter, this was early in the process of my company creating a completely new backend and frontend to support not only traintravels, but public transport as a whole.</p>
        <p>After a while I saw that I needed more education to evolve from the Support posistion to actually start working with either backend or frontend. I found a frontend development course at Noroff, which was online, and made it possible to combine with a fulltime job. I started this January of 2019, with a plan with work of starting in one of our frontend-teams after graduating December 2020.</p>
        <p>Come June 2020, and it is decided that I join the frontend development team I'm currently in immediately.</p>
      </div>
      <div>
        <p>When not working or focusing on school, I spend my time playing games, and then all kinds. PC and console games has allways been a big interest, along with boardgames. Lately I've also taken interest to roleplaying, D&D this far.</p>
        <p>Music also takes a large place in my spare time, listening, going to concerts, as well as creating and playing when the time allows it. I also have some experience with recording and production.</p>
      </div>
      <div>
        <p>Hit me up if you have any questions, in either field.</p>
      </div>
    </main>
  )
}

import React from 'react';

export default function Experience() {
  return (
    <main className='experience'>
      <div className='experienceColumn'>
        <h2>Work experience</h2>
        <div className='experienceRow'>
          <p className='experienceHeader'>Period</p>
          <p className='experienceHeader'>Position</p>
          <p className='experienceHeader'>Employer</p>
        </div>
        <div className='experienceRow'>
          <p>Jun 2020 - </p>
          <p>Frontend Developer</p>
          <p>Entur AS, Oslo</p>
        </div>
        <div className='experienceRow'>
          <p>Dec 2017 - Jun 2020</p>
          <p>Support Consultant</p>
          <p>Entur AS, Lillehammer</p>
        </div>
        <div className='experienceRow'>
          <p>Oct 2016 - Dec 2017</p>
          <p>Customer Service</p>
          <p>Entur AS, Lillehammer</p>
        </div>
        <div className='experienceRow'>
          <p>Mar 2015 - Oct 2016</p>
          <p>Customer Service</p>
          <p>NSB, Lillehammer</p>
        </div>
        <div className='experienceRow'>
          <p>Dec 2006 - Dec 2011</p>
          <p>Customer Service</p>
          <p>Telenor, Gjøvik</p>
        </div>
      </div>
      <div className='experienceColumn'>
        <h2>Education</h2>
        <div className='experienceRow'>
          <p className='experienceHeader'>Period</p>
          <p className='experienceHeader'>Course</p>
          <p className='experienceHeader'>School</p>
        </div>
        <div className='experienceRow'>
          <p>Jan 2019 - </p>
          <p>Frontend Development</p>
          <p>Noroff</p>
        </div>
        <div className='experienceRow'>
          <p>Aug 2012 - Jun 2014</p>
          <p>Musicdesign</p>
          <p>NKF - Kristiania University College</p>
        </div>
        <div className='experienceRow'>
          <p>Aug 2001 - Jun 2003</p>
          <p>Electronics, with specializing in computers and office machines</p>
          <p>Ankerskogen VGS, Hamar</p>
        </div>
      </div>
      <div className='infoText'>
        <p>I am comfortable writting HTML, CSS and vanilla js. In addition I have some experience with jQuery, and I am starting to become comfortable with Reactjs, with focus on hooks, rather than classbased components. I have also worked with Bootstrap, Less and Sass in regards of styling.</p>
        <p>Further I have some experience with nodejs backends, amongst other things, setting up a MongoDB - nodejs - Rest API.</p>
        <p>I have done some work with Electron, but are still inexperienced on that subject.</p>
      </div>
      <div className='infoText'>
        <p>In the future I am looking at expanding into backend languages like Java, Kotlin, or others. As well as other languages like possibly C#.</p>
      </div>
    </main>
  )
}

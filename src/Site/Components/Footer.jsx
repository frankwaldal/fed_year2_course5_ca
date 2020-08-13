import React from 'react';

export default function Footer({ toggleContactFormOpen }) {
  return (
    <footer>
      <p onClick={toggleContactFormOpen}>Send an email</p>
      <p><a href='https://github.com/frankwaldal?tab=repositories' target='_blank' rel='noopener noreferrer'>Github</a></p>
      <p><a href='https://www.linkedin.com/in/frank-waldal-698072191/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
    </footer>
  )
}

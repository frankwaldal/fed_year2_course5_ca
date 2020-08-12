import React from 'react';

export default function FrontPage({ toggleContactFormOpen }) {
  return (
    <div>
      <h1>Front Page</h1>
      <button onClick={toggleContactFormOpen}>Open Contact Form</button>
    </div>
  )
}

import React, { useState } from 'react';

import Contact from './Components/Contact';
import FrontPage from './Pages/FrontPage';

export default function MainSite() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  function toggleContactFormOpen() {
    setContactFormOpen(!contactFormOpen);
  }

  return(
    <>
      <FrontPage toggleContactFormOpen={toggleContactFormOpen} />
      {contactFormOpen && <Contact toggleContactFormOpen={toggleContactFormOpen} />}
    </>
  )
}

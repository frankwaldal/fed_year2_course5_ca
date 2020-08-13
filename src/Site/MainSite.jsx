import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './Pages/About';
import Contact from './Components/Contact';
import Experience from './Pages/Experience';
import Footer from './Components/Footer';
import FrontPage from './Pages/FrontPage';
import Header from './Components/Header';
import Work from './Pages/Work';

export default function MainSite() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  function toggleContactFormOpen() {
    setContactFormOpen(!contactFormOpen);
  }

  return(
    <Router>
      <Header />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/experience'>
          <Experience />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
        <Route path='/'>
          <FrontPage />
        </Route>
      </Switch>
      {contactFormOpen && <Contact toggleContactFormOpen={toggleContactFormOpen} />}
      <Footer toggleContactFormOpen={toggleContactFormOpen} />
    </Router>
  )
}

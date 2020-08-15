import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = (e) => {
    if (e.currentTarget.className === 'mobileButton') {
      setMobileOpen(!mobileOpen);
    } else {
      setMobileOpen(false);
    }
  }
  return (
    <header>
      <h1>fwaldal.no</h1>
      <nav className={mobileOpen ? 'mobileOpen' : 'mobileClosed'}>
        <ul>
          <li>
            <Link to='/' onClick={toggleMobileMenu}>Home</Link>
          </li>
          <div className='menuDivider' />
          <li>
            <Link to='/about' onClick={toggleMobileMenu}>About me</Link>
          </li>
          <div className='menuDivider' />
          <li>
            <Link to='/work' onClick={toggleMobileMenu}>My projects</Link>
          </li>
          <div className='menuDivider' />
          <li>
            <Link to='/experience' onClick={toggleMobileMenu}>Work and Education</Link>
          </li>
        </ul>
      </nav>
      <div className='mobileButton' onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>fwaldal.no</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About me</Link>
          </li>
          <li>
            <Link to='/work'>My projects</Link>
          </li>
          <li>
            <Link to='/experience'>Work and Education</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

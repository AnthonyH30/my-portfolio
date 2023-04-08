import React from 'react'
import './styles.scss';
import { RiMenu3Line } from 'react-icons/ri';

export default function NavBar() {
  return (
    <div className='navBar'>
        <div className='navBar--logo'>
            <h2>Anthony H.</h2>
        </div>
        <nav className='navBar--navigation'>
            <ul>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Experience</li>
                <li className='nav-item'>Projects</li>
                <li className='nav-item'>Contact</li>
                <li className='nav-item last'>Download CV</li>
            </ul>
        </nav>
        <button className='navBar--menuBtn'><RiMenu3Line size={30} color='#62e8cf' /></button>
    </div>
  )
}

import React, { useState } from 'react'
import './styles.scss';
import { RiMenu3Line } from 'react-icons/ri';
import { GiUsaFlag, GiBrazilFlag } from 'react-icons/gi';

export default function NavBar() {

  const [language, setlanguage] = useState("English");
  const [modalLanguageIsOpen, setModalLanguageIsOpen] = useState(false);

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
                <li onClick={() => setModalLanguageIsOpen(true)} className='nav-item language'>
                  {language === 'English' ? <GiUsaFlag size={20} /> : <GiBrazilFlag size={25} />}
                  {modalLanguageIsOpen ? <ul onMouseLeave={() => setModalLanguageIsOpen(false)} className='modalLanguage'>
                    <li onClick={() => setlanguage("English")}> <GiUsaFlag size={20} /> English</li>
                    <li onClick={() => setlanguage("Português")}> <GiBrazilFlag size={20} /> Português</li>
                  </ul> : null}
                </li>
                <li className='nav-item last'>Download CV</li>
            </ul>
        </nav>
        <button className='navBar--menuBtn'><RiMenu3Line size={30} color='#62e8cf' /></button>
    </div>
  )
}

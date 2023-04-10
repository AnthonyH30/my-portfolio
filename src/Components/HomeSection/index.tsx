import React from 'react'
import './styles.scss';
import Btn from '../Btn';

export default function HomeSection() {
  return (
    <section className='homeSection'>
      <div className='homeSection--myInfo'>
        <p className='homeSection--myInfo-apresentation'>Hi, my name is</p>
        <h1 className='homeSection--myInfo-myName'>Anthony Harisson</h1>
        <h3 className='homeSection--myInfo-myRole'>I'm a Front-end Developer</h3>
      </div>
      <div className='homeSection--paragraphAndButton'>
        <p className='homeSection--paragraphAndButton-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, eum quae id repudiandae cumque vitae temporibus odio hic minima sed? Odit laborum in impedit at sint? Ratione quasi blanditiis inventore impedit quidem nostrum!</p>
        <Btn>Get in touch</Btn>
      </div>
    </section>
  )
}

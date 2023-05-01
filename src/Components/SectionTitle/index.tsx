import React from 'react'
import './styles.scss';

export default function SectionTitle({number, name}:SectionTitleProps) {
  return (
    <div className='sectionTitle'>
        <p className='sectionTitle--number'>0{number}.</p>
        <h2 className='sectionTitle--name'>{name}</h2>
        <div className='sectionTitle--dash'></div>
    </div>
  )
}

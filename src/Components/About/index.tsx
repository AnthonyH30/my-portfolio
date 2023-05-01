import React from 'react'
import "./styles.scss"
import SectionTitle from '../SectionTitle'
import Me from '../../assets/eu.png'

export default function About() {

  const techs = [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'CSS'
    },
    {
      id: 3,
      name: 'Javascript'
    },
    {
      id: 4,
      name: 'Typescript'
    },
    {
      id: 5,
      name: 'Sass'
    },
    {
      id: 6,
      name: 'React'
    },
    {
      id: 7,
      name: 'React Native'
    },
    {
      id: 8,
      name: 'Gatsby'
    }
  ]


  return (
    <section className='about'>
        <SectionTitle number={1} name='About Me' />
        <div className='about--wrapper'>
          <aside className='about--wrapper--content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus nihil odit. Laboriosam, voluptatum eius blanditiis vero dolore accusantium ducimus mollitia. Soluta eligendi ipsam dolore suscipit a consectetur voluptatem voluptates! Architecto nulla perspiciatis blanditiis temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus nihil odit. Laboriosam, voluptatum eius blanditiis vero dolore accusantium ducimus mollitia. Soluta eligendi ipsam dolore suscipit a consectetur voluptatem voluptates! Architecto nulla perspiciatis blanditiis temporibus.</p>
          </aside>
          <div className='about--wrapper--image'>
            <figure className='image--figure'>
              <img className='image--img' src={Me} alt="my photo" />
            </figure>
          </div>
        </div>
        <div className='about--experience'>
          <h4 className='about--experience--title'>Here's a few things I'm experienced with:</h4>
          <div>
            <ul className='techs'>
              {techs.map(tech => (
                <li className='techs--item'>{tech.name}</li>
              ))}
            </ul>
          </div>
        </div>
    </section>
  )
}

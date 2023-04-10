import React from 'react'
import './styles.scss';

type ButtonProps = {
    children: React.ReactNode;
}

export default function Btn({children}: ButtonProps) {
  return <button className='btn'>{children}</button>
}

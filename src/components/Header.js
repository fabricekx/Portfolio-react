import React, { Component } from 'react';
import {TypeAnimation} from "react-type-animation"


export class Header extends Component {
  render() {
    return (
      <div className="header_wrap">
        <div className="main_info">
            <h1>Full Stack Web Development</h1>
            <TypeAnimation className='typed-text'
      sequence={[
        'Bonjour !', // Types 'Bonjour'
        1000, // Waits 1s
        'Hello !', // Deletes 'Bonjour' and types 'Two'
        1000, // Waits 2s
        'Front End', 1000, 'Back End', 1000
        ,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3rem', display: 'inline-block' }}
    />
    <a href="#" className="btn-contact">Contact me</a>
        </div>
      </div>
    )
  }
}

export default Header

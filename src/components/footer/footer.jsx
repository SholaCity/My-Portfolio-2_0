import React from 'react'
import {RiGithubFill, RiLinkedinBoxFill,RiMailLine} from 'react-icons/ri';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {GiSelfLove} from 'react-icons/gi';
import logo from '../../assets/logo.svg'
import './footer.css'

const footer = () => {
  return (
    <div className='web__footer '>
        <div className='web__footer-nav section__padding'>
              <p><a href='#about' className='p__text'>About Me</a></p>
              <p><a href='#project' className='p__text'>Projects</a></p>
        </div>
        <div className='web__footer-ft section__padding'>
          <img src={logo} alt='logo' className='logo'/>
          <div className='socials'>
            <a href='https://github.com/SholaCity'><RiGithubFill className='web__footer-ft_icon'/></a>
            <a href='https://www.linkedin.com/in/nwoko-victor-2939b7283'><RiLinkedinBoxFill className='web__footer-ft_icon'/></a>
            <a href='https://twitter.com/Nova_hub?t=gJ--jVjgUKg0YrXGSTUn4w&s=08'><AiFillTwitterSquare className='web__footer-ft_icon'/></a>
            <a href='mailto:nwokovictor1@gmail.com'><RiMailLine className='web__footer-ft_icon'/></a>
          </div>
          <p className='ft__text'><GiSelfLove size={20}/> Made by Victor</p>

        </div>
        <p className='copyright'>© 2023</p>

    </div>
  )
}

export default footer
import React from 'react';
import './about.css';
import profile from '../../assets/profile-4.jpg';
import {RiGithubFill, RiLinkedinBoxFill, RiMailLine} from 'react-icons/ri';
import {AiFillTwitterSquare} from 'react-icons/ai';


const about = () => {

  return (
    <div id='about' className='web__about section__padding section__margin'>
      <img src={profile} alt='profile-logo'/>
      <div className='web__about-text'>
        <p className='p__text'>A Lil' Note</p>
        <h3 className='gradient__text'> About Me</h3>
        <p className='text'>
          I'm <strong>Nwoko Victor</strong>, a self-taught frontend developer with over a 
          year hands-on experience using frontend technologies to build real websites.
        </p>
        <p className='text'>
          I possess basic to intermediate understanding of frontend engineering practices and workflows.
        </p>
        <div className='web__about-text_info'>
          <div className='web__about-text_socials'>
            <a href='https://github.com/SholaCity'><RiGithubFill className='icon'/></a>
            <a href='https://www.linkedin.com/in/nwoko-victor-2939b7283'><RiLinkedinBoxFill className='icon'/></a>
            <a href='https://twitter.com/Nova_hub?t=gJ--jVjgUKg0YrXGSTUn4w&s=08'><AiFillTwitterSquare className='icon'/></a>
            <a href='mailto:nwokovictor1@gmail.com'><RiMailLine className='icon'/></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default about
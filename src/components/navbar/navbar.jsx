import React, {useState} from 'react'
import './navbar.css'
import {RiReactjsLine,RiMenuFill, RiCloseLine,RiDownloadCloud2Line ,RiMailLine,RiGithubFill,RiLinkedinBoxFill} from 'react-icons/ri';
import {AiFillTwitterSquare} from 'react-icons/ai';

import {GrLocation} from 'react-icons/gr';
import resume from '../../assets/props/resume.png';
import logo from '../../assets/logo.svg'


const navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleProfile, setToggleProfile] = useState(false)
  const GitProfile = ()=>{ 
    return <div className='github fade-in'>
      <RiGithubFill className='bg-icon'/>
      <div className='github__profile'>
          <Profile/>
          <div className='profile'>
          <div className='name'>Nwoko Victor</div>
          <div className='job'>Frontend Developer</div>
        </div>
      </div>
      <hr/>
      <div className='github__info'>
      <a href='https://github.com/SholaCity'  > <GrLocation className='icon'/> Asaba , Delta State</a>
      <a href='https://nwokovictor.netlify.app' > <RiGithubFill className='icon'/>  SholaCity</a>
      <a href='mailto:nwokovictor1@gmail.com' > <RiMailLine className='icon'/> nwokovictor1@gmail.com</a>
      <a href={resume} download={resume}> <RiDownloadCloud2Line className='icon'/>Download Resume</a>
      </div>          
    </div>
    }




  const Menu = ()=>{
    return  <>
          <div className='web__navbar-wrap_container-links'>
              <p><a href='/'>Home</a></p>
              <p><a href='#about'>About</a></p>
              <p><a href='#project'>Projects</a></p>
              <p><a href='#cta'>Contact</a></p>
          </div>
    </>
  }

  const Profile = ()=>{
    return <div onClick={showProfile} className='image'><div className='online'></div></div>

  }
  

  const showProfile = () => {
    setToggleProfile(!toggleProfile)
  }

  return (
    <div className='web__navbar section__padding'>
      <div className='web__navbar-wrap'>
        <div className='web__navbar-wrap_logo'>
          <img src={logo} alt='logo' className='logo'/>
        </div>
        <div className='web__navbar-wrap_container'>
          <Menu/>
          <Profile />
          {toggleProfile ?  <GitProfile /> : ""}
        </div>
      </div>
      
      <div className='web__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine className='web__navbar-menu_icon' color="var(--color-text)" size={35} onClick={()=>setToggleMenu(false)}/>
        :<RiMenuFill className='web__navbar-menu_icon' color="var(--color-text)" size={35} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='web__navbar-menu_container fade-in' onBlur={()=>setToggleMenu(false)}>
            <div className='web__navbar-menu_container-wrap'>
              <Menu/>
              <GitProfile/>
              <div className='socials'>
                <a href='https://github.com/SholaCity'><RiGithubFill className=' icon'/></a>
                <a href='https://www.linkedin.com/in/nwoko-victor-2939b7283'><RiLinkedinBoxFill className=' icon'/></a>
                <a href='https://twitter.com/Nova_hub?t=gJ--jVjgUKg0YrXGSTUn4w&s=08'><AiFillTwitterSquare className=' icon'/></a>
                <a href='mailto:nwokovictor1@gmail.com' ><RiMailLine className=' icon'/></a>
              </div>
              <div className='react-nav ft__text'>Made with <RiReactjsLine size={20} className='rotate'/> React</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default navbar
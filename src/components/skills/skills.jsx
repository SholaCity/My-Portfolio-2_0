import React from 'react'
import './skills.css'
import Techstack from './techstack'
import {TbBrandNextjs} from 'react-icons/tb';
import {RiReactjsLine, RiHtml5Line} from 'react-icons/ri';
import {IoLogoJavascript, IoLogoCss3} from 'react-icons/io'
import { TbBrandTailwind } from 'react-icons/tb';


const skills = () => {
  return (
    <div className='web__skill section__padding'>
        <h1 className='gradient__text'>Skills</h1>

        <div className="web__skill-sub-container">
           
            <Techstack
                id={1}
                name='Html'
                image={<RiHtml5Line className='skill-icon html' /> }
                rating={5}
                norating={0}  
            />
            <Techstack
                id={2}
                name='CSS'
                image={<IoLogoCss3 className='skill-icon css' />}
                rating={5}
                norating={0}  
            />
            <Techstack
                id={3}
                name='Javascript'
                image={<IoLogoJavascript className='skill-icon js' />}
                rating={4}
                norating={1}  
            />
            <Techstack
                id={4}
                name='TailWind'
                image={<TbBrandTailwind className='skill-icon tailwind' /> }
                rating={5}
                norating={0}  
            />
            <Techstack
                id={5}
                name='React'
                image={<RiReactjsLine className='skill-icon react'/> } 
                rating={4}
                norating={1}  
            />
            <Techstack
                id={6}
                name='NextJS'
                image={<TbBrandNextjs className='skill-icon next'/> }
                rating={3}
                norating={2}  
            />
        </div>
    </div>
  )
}

export default skills
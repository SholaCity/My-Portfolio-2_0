import React,{useState} from 'react'
import './project.css'
import Data from './projectinfo';
import {FaArrowRight} from 'react-icons/fa'
import {RiCloseCircleFill, RiGithubFill} from 'react-icons/ri'
import {FaCodeBranch} from 'react-icons/fa'


const project = () => {
  const [selected , setSelected] = useState(null)

  const toggle = (index)=>{
    if (selected == index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const close = ()=>{
      return setSelected(null)
  }

  

  return (
    <div id='project' className='web__project section__padding'>
      <div className='web__project-header'>
        <div className='web__project-header_wrap'>
          <h3 className='gradient__text'>Projects</h3>
          <p className='p__text '>Here are a few of the projects I've worked on.</p>
        </div>
        <a href='https://github.com/SholaCity' className='cta__button'>Github <RiGithubFill className='icon'/></a>
      </div>
      <div className='web__project-projects'>
       {Data.map((props, index)=> {
        return <div className='web__project-projects_item' key={props.id}> 
              <div className='image_wrap'>
                 <img src={props.image} />
              </div>
              <h1 className='web__project-name' onClick={()=>{
                  toggle(index)
                }}>{props.name}</h1>
              <div className='info'>
                <div className='learn gradient__highlight' onClick={()=>{
                  toggle(index)
                }}>
                  Read Me <FaArrowRight  className='pj_icon'/>
                </div>
                <a href={props.site} className='learn gradient__highlight'> Live Site</a>
              </div>
              {selected == index ? 
              <div className='fade-in offset-full'>
                <div className='web__project-desc section__padding'>
                <RiCloseCircleFill className='web-close ' title='close this tab' onClick={close}/>
                  <div className='container'>
                    <div className='project-desc_info'>
                      <div className='image_wrap'>
                        <img src={props.image}/>
                      </div>
  
                    </div>
                    <div className='project-desc_text'>
                      <h3 className='web__project-name'> {props.name}</h3>
                      <div className='tech'>
                        {props.techuse}
                      </div>
                      <div className='btn_wrap'>
                        <a href={props.site} className='learn gradient__highlight p__text'> Live Site </a>
                        <a className='learn src'>code <FaCodeBranch className='pj_icon'/></a>
                      </div>
                      <p className='p__text'>
                        {props.desc}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div> : ""}
            </div>
       })

       }
      </div>
    </div>
  )
}

export default project
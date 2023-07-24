import React from 'react'


const techstack = (props) => {
  return (
        <div className="web__skill-items" key={props.id}>
            {props.image}
            <div className="web__skill-rating">
                {Array(props.rating).fill().map((_, i)=>(
                    <div className="rating"></div>
                ))}
                {Array(props.norating).fill().map((_, i)=>(
                    <div className="norating" ></div>
                ))}
            </div>
            <p className='web__skill-name'>{props.name}</p>
        </div>
  )
}

export default techstack
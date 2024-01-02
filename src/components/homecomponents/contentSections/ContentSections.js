import React from 'react'
import img from "../../../assets/images/pexels-pixabay-534220.jpg"
import './style.css'
import Button from '../../button/Button'

function ContentSections({ContentSectionsheading,ContentSectionspara,li1,li2,li3,text}) {
  return (
    <>
    <div className='contentsection-div container'>
        <div className='contentsection-box1'>
          <img src={img} alt='img'/>
        </div>
        <div className='contentsection-box2'>
        <h2 className='contentSection-heading'>{ContentSectionsheading}</h2>
        <p className='contentSection-para'>{ContentSectionspara}</p>
        <ul>
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        </ul>
        <Button text={text} className="btn-contentSection"/>
        </div>
    </div>
    </>
  )
}

export default ContentSections

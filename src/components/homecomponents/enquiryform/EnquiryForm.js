import React from 'react'
import './style.css'
import img from '../../../assets/images/pexels-pixabay-534220.jpg'
import Button from '../../button/Button'
// import Input from '../../input/Input'
function EnquiryForm() {
  return (
    <>
       <div className='contentsection-div container'>
        <div className='contentsection-box1'>
          <img src={img} alt='img'/>
        </div>
        <div className='contentsection-box2'>
            <from>
                <h2 className='enquiry-heading'>Enquiry</h2>
                <p>sdfghjk ksuhaf djf djskj slkjf sdjfs skfjhask skdjfs sdjf sddkfhe sdl;jf djfjd dfjnhf</p>
                <input type="text" placeholder='Your Name' className="input-box-enquiry"/><br/>
                <input type="email" placeholder='Your Email' className="input-box-enquiry"/><br/>
                <input type="number" placeholder='Your Phone no.' className="input-box-enquiry"/><br/>
                <Button text="Make an enquiry" className="btn-enquiry"/>
            </from>
        </div>
    </div>
    </>
  )
}

export default EnquiryForm

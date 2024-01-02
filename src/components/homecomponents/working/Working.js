import React from 'react'
import './style.css'
import { IoHome } from "react-icons/io5";
function Working() {
  return (
      <div className='main-div-workingsection container'>
     <h2 className='workingsection-heading'>How it works? <br/>Find a <b>perfect home</b></h2>
     <div className='working-div'>
        <div className='working-box'>
            <button className='icons'><IoHome/></button>
            <h3 className='subheading-workingSection'>Find Real estate</h3>
            <p>s;alkfn as;ldfjj sd;fghs;f n;sfjjhs;f s;udsglhihsf gsrrhgsfh lsuhgflshb</p>
        </div>
        <div className='working-box'>
            <button className='icons'><IoHome/></button>
            <h3 className='subheading-workingSection'>Meet relator</h3>
            <p>s;alkfn as;ldfjj sd;fghs;f n;sfjjhs;f s;udglhihsf gsrrhgsfh lsuhgflshb</p>
        </div>
        <div className='working-box'>
            <button className='icons'><IoHome/></button>
            <h3 className='subheading-workingSection'>Documents</h3>
            <p>s;alkfn as;ldfjj sd;fghs;f n;sfjjhs;f s;ushglhihsf gsrrhgsfh lsuhgflshb</p>
        </div>
        <div className='working-box'>
            <button className='icons'><IoHome/></button>
            <h3 className='subheading-workingSection'>Take the key</h3>
            <p>s;alkfn as;ldfjj sd;fghs;f n;sfjjhs;f s;udsjshglhihsf gsrrhgsfh lsuhgflshb</p>
        </div>

     </div> 
    </div>
  )
}

export default Working

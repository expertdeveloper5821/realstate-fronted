import React from 'react'
import './style.css'
import { IoHome } from "react-icons/io5";
    const data=[
        {
            id:1,
            heading:"Find Real estate",
            para:"s;alkfn as;ldfjj sd;fghs;f n;sfjjhs;f s;udsglhihsf gsrrhgsfh lsuhgflshb",
            logo:<IoHome/>,
        },
        {
            id:2,
            heading:"Find Real estate",
            para:"s;alkfn as;ldfjj sd;fghs;f n;sfjjhs;f s;udsglhihsf gsrrhgsfh lsuhgflshb",
            logo:<IoHome/>,
        },
        {
            id:3,
            heading:"Find Real estate",
            para:"s;alkfn as;ldfjj sd;fghs;f n;sfjjhs;f s;udsglhihsf gsrrhgsfh lsuhgflshb",
            logo:<IoHome/>,
        },
        {
            id:4,
            heading:"Find Real estate",
            para:"s;alkfn as;ldfjj sd;fghs;f n;sfjjhs;f s;udsglhihsf gsrrhgsfh lsuhgflshb",
            logo:<IoHome/>,
        },
    ]

function Working() {
  return (
      <div className='main-div-workingsection container'>
     <h2 className='workingsection-heading'>How it works? <br/>Find a <b>perfect home</b></h2>
     <div className='working-div'>
        {data.map((data1)=>(
            <div className='working-box'>
            <button className='icons'>{data1.logo}</button>
            <h3 className='subheading-workingSection'>{data1.heading}</h3>
            <p>{data1.para}</p>
            </div>
        ))}
     </div> 
    </div>
  )
}

export default Working

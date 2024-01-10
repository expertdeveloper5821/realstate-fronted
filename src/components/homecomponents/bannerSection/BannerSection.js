import React from 'react'
import "./style.css"
import img from "../../../assets/images/pexels-pixabay-534220.jpg"
function BannerSection({heading,para}) {
  return (
    <>
      <div className='backgroundimage' style={{background:`url(${img})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div className='bannerbox firstbannerbox container'>
            <h2 className='bannerHeading'>{heading}</h2>
            <p className='bannerPara'>{para}</p>
      </div>
      <div className='bannerbox secondbannerbox'>
      
      </div>
      </div>
    </>
  )
}

export default BannerSection

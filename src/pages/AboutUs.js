import React from 'react'
import TeamMembers from '../components/homecomponents/teamMembers/TeamMembers'
import img from '../assets/images/image-7.jpg'
import image from '../assets/images/image-14.jpg'
import img2 from '../assets/images/image-12.jpg'
import img4 from '../assets/images/image-3.jpg'

import ContentSections from '../components/homecomponents/contentSections/ContentSections'
import './AboutUs.css'

const visionSection = " Our vision is to redefine the real estate experience by seamlessly connecting individuals with their dream properties. We aspire to be the trusted digital platform that empowers users with comprehensive and innovative solutions, simplifying the complexities of property transactions.  Together, we build more than homes; we build dreams, shaping the future of living spaces with passion, innovation, and a dedication to excellence."

const missionsection =" Our mission is to revolutionize the way individuals navigate the real estate landscape. We are dedicated to providing a seamless and empowering online platform that simplifies property transactions, putting the dream of homeownership within reach for everyone.  We believe that every property transaction is an opportunity to create lasting connections and build a community where homes are more than structures—they are the foundation of cherished memories and fulfilled dreams."

const data = [
    {
        id:1,
        heading: "$980k",
        para: "Median sold price"
    },
    {
        id:2,
        heading: "24",
        para: "Property sold"
    },
    {
        id:3,
        heading: "$680k",
        para: "Median leased price"
    },
    {
        id:4,
        heading: "95",
        para: "Properties leased"
    },
    {
        id:5,
        heading: "$522k",
        para: "Sales & rental transactions"
    }
]

function AboutUs() {
    return (
        <>
            <div className='about-us-text' style={{ backgroundImage: `url(${image})` }}>About Us</div>
            <ContentSections img={img2} ContentSectionsheading="Vision" ContentSectionspara={visionSection} text="View More " />
            <div className='container'>
                <div className='live-counts'>
                    {
                        data.map((data)=>(
                            <div className='live-counts-box'>  
                            <h2 className='live-counts-box-heading'>{data.heading}</h2>
                        <p>{data.para}</p>
                    </div> 
                        ))
                    }
                     
                </div>
            </div>

            <ContentSections img={img4} ContentSectionsheading="Mission" ContentSectionspara={missionsection} text="View More " />
            <div className='about-us-text' style={{ backgroundImage: `url(${img})`}}>
                <div>
                    Premium Houses <br />And Apartments
                    <div className='sub-heading-about'>Save your time and easily rent or sell your property</div>
                </div>
            </div>
            <TeamMembers />
        </>
    )
}

export default AboutUs

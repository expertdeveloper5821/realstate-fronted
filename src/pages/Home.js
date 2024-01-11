import React from 'react'
import BannerSection from '../components/homecomponents/bannerSection/BannerSection'
import List from '../components/homecomponents/list/List'
import ContentSections from '../components/homecomponents/contentSections/ContentSections'
import Working from '../components/homecomponents/working/Working'
import EnquiryForm from '../components/homecomponents/enquiryform/EnquiryForm'
import TeamMembers from '../components/homecomponents/teamMembers/TeamMembers'
import img1 from '../assets/images/image-3.jpg'

const paraPara = "In literary theory, a text is any object that can be  whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message."

const contentPara = " this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informat"

function Home() {
  return (
    <>
      <BannerSection heading="Heading" para={paraPara} />
      <List startslice="0" endslice="6" showButton={true} />
      <ContentSections ContentSectionsheading="hadingSection"  ContentSectionspara={contentPara} li1="fghjsd" li2="sajkfh" li3="rtyuio" text="Premium Properties" img={img1}/>
      <Working/>
      <EnquiryForm/>
      <TeamMembers/>
    </>
  )
}

export default Home

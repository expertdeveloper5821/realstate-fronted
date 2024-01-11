import React from 'react'
import BannerSection from '../components/homecomponents/bannerSection/BannerSection'
import List from '../components/homecomponents/list/List'
import ContentSections from '../components/homecomponents/contentSections/ContentSections'
import Working from '../components/homecomponents/working/Working'
import EnquiryForm from '../components/homecomponents/enquiryform/EnquiryForm'
import TeamMembers from '../components/homecomponents/teamMembers/TeamMembers'
// import img4 from '../assets/images/image-3.jpg'
import img5 from '../assets/images/image-4.jpg'
function Home() {
  return (
    <>
      <BannerSection heading="Heading" para="In literary theory, a text is any object that can be  whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message." />
      <List/>
      <ContentSections img={img5} ContentSectionsheading="Heading Section"  ContentSectionspara=" this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informat" li1="fghjsd" li2="sajkfh" li3="rtyuio" text="Premium Properties"/>
      <Working/>
      <EnquiryForm/>
      <TeamMembers/>
    </>
  )
}

export default Home

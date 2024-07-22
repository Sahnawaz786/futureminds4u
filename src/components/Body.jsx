import React from 'react'
import Carousal from './Carousal'
import CardDisplay from './CardDisplay'
import CorporateLinks from './CorporateLinks'
import Testimonials from './Testimonials'

const Body = () => {
  return (
    <div>
      <Carousal/>
      <CardDisplay/>
      <CorporateLinks/>
      <Testimonials/>
    </div>
  )
}

export default Body

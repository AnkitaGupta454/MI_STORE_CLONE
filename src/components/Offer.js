import React from 'react'
import OfferCard from "./OfferCard"
import "../styles/Offers.css"

const Offer = ({offer}) => {
  return (
   <div className='offerSection'>
       {
           offer.map((item,index)=>
           <OfferCard key={item.image} index={index} src={item.image} link={item.url}/>
           )
       }
   </div>
  )
}

export default Offer
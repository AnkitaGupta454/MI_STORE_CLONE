import React from 'react'
import "../styles/vedio.css"
import VedioCard from './VedioCard'


const Videos = ({videos}) => {
    return (
        <div className="videos">
         {
             videos.map((item,index)=>(
                <VedioCard  index={index} key={item.image} image={item.image} name={item.name}/>
             ))
         }
   </div>

    )
}

export default Videos
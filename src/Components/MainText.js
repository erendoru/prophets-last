import React from 'react'
import '../Styles/MainText.scss'
import img from '../Images/cloud.png'

function MainText() {
  return (
    <div className="main">
        <div className="text-side">
            <h2><strong>WE <a>BELİEVE</a></strong> <br/>WE CAN CHANGE THE 
            WAY OF<br/> NFT WORLD</h2>
            <p className="long-text">
            Different God’s Messanger for every blockchain and integrations with metaverse projects. We’re going to write the HOLY BOOK OF METAVERSE with our hodler in the HOLYDAO.   
            </p>
            <p className="bold-text">
                Just like in real world, there will be a God in Metaverse as well.
            </p>
        </div>
        <div className="img">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default MainText
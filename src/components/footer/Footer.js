import React from 'react'
import twitte from "../../assets/twitte.png"
import git from "../../assets/git.png"
import link from "../../assets/link.png"

function Footer() {
  return (
    <div className='foter'>
        <small>&copy; Copyright 2022, Delyce</small>
        <div>
        <div className='social'>
        <a href="https://www.linkedin.com/in/delyce-twizeyimana-475977217/" target="_blank"><img className='link' src={link} alt="" /></a> 
        <a href="https://twitter.com/home" target="_blank"><img src={twitte} alt="" /></a> 
        <a href="https://github.com/" target="_blank"></a> <img className='git' src={git} alt="" />
       
        </div>
       
        </div>
        
        <a className='website' href="https://delyc.github.io/Delyce_portifolio/" target="_blank">Website</a>
        

    </div>
  )
}

export default Footer
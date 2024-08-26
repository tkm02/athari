import React from 'react'
import Title from '../TitleCustom/Title'
import CardService from './CardService'
import './Service.css'
import icon1 from '../../assets/icon.png'
import icon2 from '../../assets/icon (1).png'
import icon3 from '../../assets/icon (2).png'
import icon4 from '../../assets/icon (3).png'
import icon5 from '../../assets/Group 1000001778.png'
import icon6 from '../../assets/icon (5).png'
export const Service = () => {
  return (
    <div className='container-services'>
      <Title text={"Nos services"} />
      <div class="grid-container">

        <CardService icon={icon1} text="Education" color="#FFFFFF" textColor="#008080" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
        <CardService icon={icon2} text="Santé" color="#008080" textColor="#FFFFFF" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
        <CardService icon={icon3} text="Agrobusiness" color="#FFFFFF" textColor="#008080" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
        <CardService icon={icon4} text="Digital et technologie" color="#008080" textColor="#FFFFFF" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis."/>
        <CardService icon={icon5} text="Inclusion financière" color="#FFFFFF" textColor="#008080" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />
        <CardService icon={icon6} text="Industrialisation" color="#008080" textColor="#FFFFFF" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis." />

      </div>

      <a href="#">En savoir plus <i class="fa-solid fa-arrow-right"></i></a>

    </div>
  )
}

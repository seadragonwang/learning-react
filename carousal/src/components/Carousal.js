import React, { useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa' 
import { CarousalData } from './CarousalData';

const Carousal = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length-1? 0: current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0?length-1: current-1)
    }
    if(!Array.isArray(slides) || slides.length < 1){
        return null;
    }
  return (
    <section className='carousal'>
        <FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide}/>
        {CarousalData.map((slide, index) => {
            return (
                <div className={index === current?'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slide.url} alt='beautiful image' className='image'/>)}
                </div>
            );
        })}
    </section>
  );
};

export default Carousal;
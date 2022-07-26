import React, {Component, FC} from "react";
import Slider from "react-slick";
import './styles.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
    trend : any
}

const SimpleSlider:FC<IProps> = ({trend}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='slider'>
            <h2>Popular</h2>
            <Slider {...settings}>
                {trend.map((item:any)=><div className='slider-item'><img className='backdrop' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt=""/><span>{item.original_title}</span></div>)}
            </Slider>
        </div>
    );
}

export default SimpleSlider
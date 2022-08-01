import React, {Component, FC} from "react";
import Slider from "react-slick";
import './styles.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderInfo from "../SliderInfo";

interface IProps {
    items : any,
    slidesToShow:number,
}

const SlickSlider:FC<IProps> = ({items,slidesToShow}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='slider'>
            <Slider {...settings}>
                {items.map((item:any)=><SliderInfo slidesToShow={slidesToShow} {...item} />)}
            </Slider>

        </div>
    );
}

export default SlickSlider


function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <a onClick={onClick} className={'next'}>&#8250;</a>
    );
}

function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <a onClick = {onClick} className={'previous'}>&#8249;</a>
    );
}

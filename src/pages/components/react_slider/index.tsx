import React, {Component, FC, useEffect, useState} from "react";
import Slider from "react-slick";
import './styles.scss'
import {ISliderItem} from '../../../types/types'

import SliderInfo from "../SliderInfo";

interface IProps {
    items : ISliderItem[],
    slidesToShow:number,
    res:string
}

const SlickSlider:FC<IProps> = ({items,slidesToShow,res}) => {

    const [settings , setSettings] = useState<any>({})

    useEffect(()=>{
        if(res==='big') {
            setSettings({
                dots: true,
                infinite: false,
                speed: 200,
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
                responsive:[
                    {
                        breakpoint:600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll:2,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint:420,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll:1,
                            infinite: true,
                            dots: false
                        }
                    }
                ]
            })
        }
        if(res==='small') {
            setSettings({
                dots: true,
                infinite: false,
                speed: 200,
                slidesToShow: slidesToShow,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
                responsive:[
                    {
                        breakpoint:1200,
                        settings: {
                            slidesToShow: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint:600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll:2,
                            infinite: true,
                            dots: false
                        }
                    },
                    {
                        breakpoint:420,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll:1,
                            infinite: true,
                            dots: false
                        }
                    }
                ]
            })
        }
    },[])


    if(!settings.speed) {
        return (
            <div>Wait</div>
        )
    }

    return (
        <div className='slider'>
            <Slider {...settings}>
                {items.map((item:ISliderItem)=><SliderInfo slidesToShow={slidesToShow} {...item} />)}
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

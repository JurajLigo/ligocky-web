import * as React from 'react';

const classNames = require('classnames');

interface CarouselItemProps {
    description: string;
    order: number;
    totalCount: number;
    isLandscape: boolean;
}

export default function CarouselItem(props: CarouselItemProps): JSX.Element {

    let backgroundImgStyle: any = {
        'backgroundImage': `url("../../assets/carousel/${props.order}.jpg")`
    };

    if (window.screen.availWidth < 768) {

        const portrait: string = !props.isLandscape ? 'portrait/' : '';

        backgroundImgStyle = {
            'backgroundImage': `url("../../assets/carousel/mobile/${portrait}${props.order}.jpg")`
        };
    }

    const carouselItemCls: any = classNames({
        'carousel__item': true
    });

    return (
        <div className={carouselItemCls} style={backgroundImgStyle}>
            <div className="carousel__description">
                {props.description}
            </div>
            <div className="carousel__order">
                Photo {props.order} of {props.totalCount}
            </div>
        </div>
    );
}
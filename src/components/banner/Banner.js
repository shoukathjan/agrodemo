import React from 'react';
import "../css/style.css";
import BannerSlider from './BannerSlider';

const items = [
    {
        heading1: 'Farm',
        heading2: 'Agro Crop ',
        heading3: 'Fresh Ideas',
        cname:  'banner-slider1'
    },
    {
        heading1: 'Fruits',
        heading2: 'Agro Crop ',
        heading3: 'Fresh Ideas',
        cname:  'banner-slider2'
    },
    {
        heading1: 'Healthy',
        heading2: 'Agro Crop ',
        heading3: 'Fresh Ideas',
        cname:  'banner-slider3'
    }]

const Banner = () => {
    return (<div>
    
        <BannerSlider items ={items}  />

      
	</div>
    );
}

export default Banner;
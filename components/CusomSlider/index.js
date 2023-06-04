import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React, {useRef} from 'react';
import { Carousel, Button } from "antd";

const CustomSlider = ({children}) =>{

    const sliderRef = useRef();
    const handleNext = () => sliderRef.current.next();

    const handlePrev = () => sliderRef.current.prev();
    return (
        <div style={{position:'relative'}}> 
        <div>
        <Carousel ref={sliderRef} dots={false} >
           {children.map(item => item)}
        </Carousel>
        </div>
        <Button className='buttonDirectionLeft' onClick={handlePrev}> {'<'} </Button>
        <Button className='buttonDirection' onClick={handleNext}> {'>'} </Button>
        </div>
  );
}

export default CustomSlider;
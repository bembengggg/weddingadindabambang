import * as React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import bambang1 from '../../Assets/image/bambang1.jpg';
import bambang2 from '../../Assets/image/bambang2.jpg';
import bambang3 from '../../Assets/image/bambang3.jpg';
import bambang4 from '../../Assets/image/bambang4.png';
import bambang5 from '../../Assets/image/bambang5.jpg';
import bambang6 from '../../Assets/image/bambang6.jpg';
import bambang7 from '../../Assets/image/bambang7.png';
import bambang8 from '../../Assets/image/bambang8.jpg';
import bambang9 from '../../Assets/image/bambang9.jpg';
import bambang10 from '../../Assets/image/bambang10.jpg';
import bambang11 from '../../Assets/image/bambang11.jpg';
import bambang12 from '../../Assets/image/bambang12.jpg';
import './Gallery.css';


export default function Form() {
  return (
    <SRLWrapper>
       <img alt='Perjalanan yang membuat mencapai dititik ini'src={bambang10}/>
        <img alt='imgbg2'src={bambang4}/> 
         <img alt='imgbg3'src={bambang3}/>
        <img alt='imgbg4'src={bambang11}/>
         <img alt='imgbg5'src={bambang5}/>
         <img alt='imgbg6'src={bambang12}/> 
        <img alt='imgbg7'src={bambang7}/>
        <img alt='imgbg8'src={bambang8}/>
          <img alt='imgbg9'src={bambang9}/>
          <img alt='imgbg10'src={bambang1}/>
          <img alt='imgbg11'src={bambang2}/>
          <img alt='imgbg12'src={bambang6}/>
    </SRLWrapper>
  );
}

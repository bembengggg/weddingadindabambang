import React from 'react';
import './Gallery.css';
import gallery from '../Gallery/bgimage.jpg';
import bambang1 from '../../Assets/image/bambang1.jpg';
import bambang2 from '../../Assets/image/bambang2.jpg';
import bambang3 from '../../Assets/image/bambang3.jpg';
import bambang4 from '../../Assets/image/bambang4.jpg';
import bambang5 from '../../Assets/image/bambang5.jpg';
import bambang6 from '../../Assets/image/bambang6.jpg';
import bambang7 from '../../Assets/image/bambang7.jpg';
import bambang8 from '../../Assets/image/bambang8.jpg';
import bambang9 from '../../Assets/image/bambang9.jpg';
import bambang10 from '../../Assets/image/bambang10.jpg';
import bambang11 from '../../Assets/image/bambang11.jpg';
import bambang12 from '../../Assets/image/bambang12.jpg';



const Gallery =()=>{
    return(
        <div className='wrap'>
           <img className='imgbg' alt='imgbg'src={gallery}/>
           <div className='grid'>
           <img alt='imgbg'src={bambang10}/>
           <img alt='imgbg'src={bambang4}/>
           <img alt='imgbg'src={bambang3}/>
           <img alt='imgbg'src={bambang11}/>
           <img alt='imgbg'src={bambang5}/>
           <img alt='imgbg'src={bambang12}/>
           <img alt='imgbg'src={bambang7}/>
           <img alt='imgbg'src={bambang8}/>
           <img alt='imgbg'src={bambang9}/>
           <img alt='imgbg'src={bambang1}/>
           <img alt='imgbg'src={bambang2}/>
           <img alt='imgbg'src={bambang6}/>
            

           </div>
         </div>
    

    )
}

export default Gallery;
import React from 'react';
import './Gallery.css';
import gallery from '../Gallery/bgimage.jpg';


const Gallery =()=>{
    return(
        <div className='wrap'>
           <img className='imgbg' alt='imgbg'src={gallery}/>
           <div className='grid'>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
           <img alt='imgbg'src={gallery}/>
            

           </div>
         </div>
    

    )
}

export default Gallery;
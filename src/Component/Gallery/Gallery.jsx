import React from 'react';
import './Gallery.css';
import gallery from '../Gallery/bgimage.jpg';





const Gallery =()=>{
    return(
        <div className='wrap'>
           <img className='imgbg' alt='imgbg'src={gallery}/>
           <div className='grid'>
           
            

           </div>
         </div>
    

    )
}

export default Gallery;
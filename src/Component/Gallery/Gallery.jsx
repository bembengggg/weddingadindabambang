import React from 'react';
import './Gallery.css';
import gallery from '../Gallery/bgimage.jpg';
import Form from "./Form";
import SimpleReactLightbox from "simple-react-lightbox";



const Gallery =()=>{
    return(
        <div className='wrap'>
           <img className='imgbg' alt='imgbg'src={gallery}/>
           <div className='formbtn'>
           {/* <button className="btn" onClick={event =>  window.location.href='https://api.whatsapp.com/send?phone=6281367649724&text=Halo%20Saya%20Akan%20Datang%20KePernikahan%20anda'}>Watch On Youtube</button> */}
           {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/CPKqZB7C-cI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
           <div className='bksrangkaian'>
                <div className='bks'>Galery</div>
           </div>
           <div className='grid'>
           <SimpleReactLightbox>
                <Form />
          </SimpleReactLightbox>
           </div>
        
         </div>
    

    )
}

export default Gallery;
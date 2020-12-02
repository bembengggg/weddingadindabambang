import React from 'react';
import './Gallery.css';
import gallery from '../Gallery/bgimage.jpg';
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



const Gallery =()=>{
    return(
        <div className='wrap'>
           <img className='imgbg' alt='imgbg'src={gallery}/>
           <div className='formbtn'>
           {/* <button className="btn" onClick={event =>  window.location.href='https://api.whatsapp.com/send?phone=6281367649724&text=Halo%20Saya%20Akan%20Datang%20KePernikahan%20anda'}>Watch On Youtube</button> */}
           <iframe width="100%" height="315" src="https://www.youtube.com/embed/CPKqZB7C-cI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           <div className='bksrangkaian'>
                <div className='bks'>Galery</div>
           </div>
           <div className='grid'>
          <a href={bambang10}><img alt='imgbg1'src={bambang10}/></a> 
          <a href={bambang4}><img alt='imgbg2'src={bambang4}/></a>  
          <a href={bambang3}><img alt='imgbg3'src={bambang3}/></a>
          <a href={bambang11}> <img alt='imgbg4'src={bambang11}/></a>
          <a href={bambang5}> <img alt='imgbg5'src={bambang5}/></a> 
          <a href={bambang12}><img alt='imgbg6'src={bambang12}/></a>  
          <a href={bambang7}><img alt='imgbg7'src={bambang7}/></a> 
          <a href={bambang8}><img alt='imgbg8'src={bambang8}/></a>  
          <a href={bambang9}><img alt='imgbg9'src={bambang9}/></a> 
          <a href={bambang1}><img alt='imgbg10'src={bambang1}/></a>
          <a href={bambang2}><img alt='imgbg11'src={bambang2}/></a>
          <a href={bambang6}><img alt='imgbg12'src={bambang6}/></a>
           </div>
        
         </div>
    

    )
}

export default Gallery;
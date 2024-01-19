import React from 'react';
import './App.css'
const images = require.context('./images', true);
const imageList = images.keys().map(image => images(image));

function ImageGallery() {
    const getImageName = (imgName) =>{
        let img = imgName.split("/").pop().slice(0, imgName.indexOf('.'))
        
        return img.slice(0, img.indexOf('.'))
    }
  return (
    <div className='image_gallery' >
             <h1>SVGS</h1>
      {imageList.map((image, index) => (
        <>
          {image.includes('.svg') &&
          <div className='img_item'>
            <picture className='img_wrapper svg'>
              <img  key={index} src={image} alt={`${index}`} />
            </picture>
            <strong>{getImageName(image)}</strong>
          </div>}
        </>
      ))}
        <h1>PNGS</h1>
      {imageList.map((image, index) => (
      <>
        {image.includes('data:image/png') && 
        <div className='img_item png' tabIndex="0">
          <picture className='img_wrapper png'>
            <img  key={index} src={image} alt={`${index}`} />
          </picture>
        </div>}
        </>
      ))}
    </div>
  );
}

export default ImageGallery;
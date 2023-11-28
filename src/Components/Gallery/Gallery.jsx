import React from 'react';
import './Gallery.css';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Masonry from 'react-masonry-css';

import img1 from './assets/1-_DSC7910.jpg'
import img2 from './assets/2-_DSC7908.jpg'
import img3 from './assets/3-_DSC7907.jpg'
import img4 from './assets/4-_DSC7903.jpg'
import img5 from './assets/5-_DSC7901.jpg'
import img6 from './assets/6-_DSC7899.jpg'
import img7 from './assets/7-_DSC7872.jpg'
import img8 from './assets/8-_DSC7871.jpg'
import img9 from './assets/9-_DSC7870.jpg'
import img10 from './assets/10-_DSC7869.jpg'
import img11 from './assets/11-_DSC7868.jpg'
import img12 from './assets/12-_DSC7867.jpg';
import img13 from './assets/13-_DSC7865.jpg';
import img14 from './assets/14-_DSC7862.jpg';
import img15 from './assets/15-_DSC7855.jpg';
import img16 from './assets/16-_DSC7853.jpg';
import img17 from './assets/17-_DSC7848.jpg';
import img18 from './assets/18-_DSC7847.jpg';
import img19 from './assets/19-_DSC7846.jpg';
import img20 from './assets/20-_DSC7845.jpg';
import img21 from './assets/21-_DSC7843.jpg';
import img22 from './assets/22-_DSC7836.jpg';
import img23 from './assets/23-_DSC7834.jpg';
import img24 from './assets/24-_DSC7833.jpg';
import img25 from './assets/25-_DSC7832.jpg';
import img26 from './assets/26-_DSC7831.jpg';
import img27 from './assets/27-_DSC7830.jpg';
import img28 from './assets/28-_DSC7829.jpg';
import img29 from './assets/29-_DSC7828.jpg';
import img30 from './assets/30-_DSC7824.jpg';
import img31 from './assets/31-_DSC7820.jpg';
import img32 from './assets/32-_DSC7811.jpg';
import img33 from './assets/33-_DSC7809.jpg';
import img34 from './assets/34-_DSC7807.jpg';
import img35 from './assets/35-_DSC7806.jpg';
import img36 from './assets/36-_DSC7805.jpg';
import img37 from './assets/37-_DSC7804.jpg';
import img38 from './assets/38-_DSC7802.jpg';
import img39 from './assets/39-_DSC7801.jpg';
import img40 from './assets/40-_DSC7798.jpg';
import img41 from './assets/41-_DSC7795.jpg';
import img42 from './assets/42-_DSC7794.jpg';
import img43 from './assets/43-_DSC7793.jpg';
import img44 from './assets/44-_DSC7790.jpg';
import img45 from './assets/45-_DSC7788.jpg';
import img46 from './assets/46-_DSC7785.jpg';
import img47 from './assets/47-_DSC7778.jpg';
import img48 from './assets/48-_DSC7777.jpg';
import img49 from './assets/49-_DSC7775.jpg';
import img50 from './assets/50-_DSC7771.jpg';
import img51 from './assets/51-_DSC7765.jpg';
import img52 from './assets/52-_DSC7761.jpg';
import img53 from './assets/53-_DSC7760.jpg';
import img54 from './assets/54-_DSC7759.jpg';
import img55 from './assets/55-_DSC7757.jpg';
import img56 from './assets/56-_DSC7756.jpg';
import img57 from './assets/57-_DSC7753.jpg';
import img58 from './assets/58-_DSC7749.jpg';
import img59 from './assets/59-_DSC7743.jpg';
import img60 from './assets/60-_DSC7742.jpg';
import img61 from './assets/61-_DSC7741.jpg';
import img62 from './assets/62-_DSC7737.jpg';
import img63 from './assets/63-_DSC7729.jpg';
import img64 from './assets/64-_DSC7715.jpg';
import img65 from './assets/65-_DSC7708.jpg';
import img66 from './assets/66-_DSC7707.jpg';
import img67 from './assets/67-_DSC7703.jpg';

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
    img63,
    img64,
    img65,
    img66,
    img67,
];

const Images = () => {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    }

    const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="images-container">
      <LightGallery onInit={onInit} speed={400} plugins={[lgThumbnail, lgZoom]} animateThumb={false} allowMediaOverlap={false} appendThumbnailsTo='.lg-outer' addClass='lg-custom-thumbnails'>
          {images.map((image, index) => (
            <a key={`img${index + 1}`} href={image}>
              <img alt={`img${index + 1}`} src={image} style={{ maxWidth: '100%', height: 'auto' }} />
            </a>
          ))}
      </LightGallery>
    </section>
  );
};

export default Images
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

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
    img10
]

const Gallery = () => {
    return (
        <>
            <div className='gallery-container'>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry>
                        {images.map((image, idx) => (
                            <img key={idx} src={image} style={{ width: '100%', display: 'block' }} alt='' />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )
}

export default Gallery
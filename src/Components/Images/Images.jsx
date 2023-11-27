import React from 'react'
import './Images.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 };

const Images = () => {
    return (
        <section className='images-container'>
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                <Masonry gutter={4}>
                    {/* {images.map((image) => (
                        <img src={image} />
                    ))} */}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}

export default Images
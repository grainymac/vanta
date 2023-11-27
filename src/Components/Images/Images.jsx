import React from 'react'
import './Images.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const photos = [
    'https://images.pexels.com/photos/416831/pexels-photo-416831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2417726/pexels-photo-2417726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3807093/pexels-photo-3807093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

const Images = () => {
    return (
        <section className='images-container'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry columnsCount={3} gutter={5}>
                    {photos.map((photo) => (
                        <img className='band-image' src={photo} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}

export default Images
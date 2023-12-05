import React from 'react'
import './Header.css'
import vanta from '../../assets/vanta.jpg'

const Header = () => {
    return (
        <header className='header-container'>
            <div className='title-container'>
                <h1 className='header-title'>Vanta</h1>
                <p className='header-text'>@ Haltom Theater - <date>11/25/2023</date></p>
            </div>

            <img src={vanta} alt='band logo' className='vanta-logo'/>

            <div className='link-container'>
                <h2><a href=''>contact the band</a></h2>
                <h2><a href='https://ianmac.live' target='_blank'>contact the photographer</a></h2>
            </div>
        </header>
    )
}

export default Header
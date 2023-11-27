import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className='header-container'>
            <h1 className='header-title'>Vanta</h1>
            <nav className='header-nav-container'>
                <ul>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>Pictures</li>
                    <li className='nav-item'>Links</li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
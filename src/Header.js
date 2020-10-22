import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <div className='header'>
            <img className='header__icon'
            src='https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg'
            alt='airbnb logo' />

            <div className='header__center'>
                <input type='text'/>
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header

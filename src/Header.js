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
            src='https://assets.entrepreneur.com/content/3x2/2000/1405612741-airbnb-why-new-logo.jpg?width=600&crop=16:9'
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

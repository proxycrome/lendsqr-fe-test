import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import Bell from '../assets/images/Bell.png';
import Avatar from '../assets/images/avatar.png';
import Search from '../assets/images/search.png';
import './components.scss';

const Navbar = () => {
  return (
    <div className='content'>
      <Logo/>
      <div>
        <div className="input-group">
            <input 
                type="search" 
                placeholder="Search for anything"
                name="search" 
                className="search-input form-control" 
            />
            <div className="input-group-text search-icon-field">
                <div className="">
                    <img src={Search} alt="search icon"/>
                </div>
            </div>
        </div>
      </div>
      <div className='right-end'>
        <Link to="#">
            <span>Docs</span>
        </Link>
        <img src={Bell} alt="notification bell" />
        <div className="profile">
            <img src={Avatar} alt="avatar"/>
            <span>Adedeji</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar

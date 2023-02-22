import React from 'react'
import logo from '../assets/images/Logo.png';
import logoText from '../assets/images/Logo_text.png';

const Logo = () => {
  return (
    <div className="d-flex gap-2">
      <img src={logo} alt="logo" width="24" height="24" />
      <img src={logoText} alt="logo text" width="136" height="36"/>
    </div>
  )
}

export default Logo

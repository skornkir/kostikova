import React from 'react'
import Link from 'react-router-dom/es/Link';
const Logo  = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src="../images/logo.png" />
      </div>
    </Link>
  )
}

export default Logo;


import React from 'react'

const Navbar = () => {
  return (
    <div className='container nav-container'>
        <div className="logo">
            <img src="./images/Logo.svg" alt="" />
        </div>
        <div className="nav-right">
            <ul>
                <li>Home</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Us</li>
            </ul>
            <div className="btns">
                <button className='btn1'>Login</button>
                <button className='btn2'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
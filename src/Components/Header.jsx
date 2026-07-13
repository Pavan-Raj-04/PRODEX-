import React from 'react'
import logo from '../assets/img/header/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="logo">
                <div className='limg'>
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className='appname'><Link to='/'><h3>PRODEX</h3></Link></div>
            </div>
            <div className="search">
                <form action="">
                    <input type="search" placeholder='Search Products' />
                    <button>search</button>
                </form>
            </div>
            
            <div className="btns">
                <button className='btn1' >LOGIN</button>
                <Link to={'/cart'}><button className='btn2' >CART</button></Link>
            </div>
        </div>
    </>
  )
}

export default Header

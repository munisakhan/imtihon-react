
import './navbar.css'
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false)
    const HandleOpen = () => {
        setOpen(true);
    }
    const HandleClose = () => {
        setOpen(false);
    }
     const [theme, setTheme] = useState(
            localStorage.getItem('theme') || 'light'
          );
          const toggleTheme = () => {
            if (theme === 'light') {
              setTheme('dark');
            } else {
              setTheme('light');
            }
          };
          useEffect(() => {
            localStorage.setItem('theme', theme);
            document.body.className = theme;
          }, [theme]);
    return (
        <>
        <header className='header'>
            <nav className='navbar'>
                <div className="container">
                    <ul className="navbar_ul">
                        <li className="navbar_li">
                        <i class='bx bx-search'></i>
                        </li>
                        <li className="navbar_li">
                        <i class='bx bx-home' ></i>
                        </li>
                        <li className="navbar_li">
                        <i class='bx bx-chat' ></i>
                        </li>
                        <li className="navbar_li">
                        <i onClick={HandleOpen} class='bx bx-log-in' ></i>
                            {open ? <div className='modal_nav'>
                                <NavLink to="/search" className="modal_search">Search</NavLink>
                                <NavLink to="/" className="modal_home">Home</NavLink>
                                <p className="modal_message">Message</p>
                                <i onClick={HandleClose} class='bx bx-log-out' ></i>
                            </div> : null}
                        </li>
                        <li>
                          <div className={`App ${theme}`}>
                      <button className='toggle' onClick={toggleTheme}><i class='bx bx-sun'></i></button>
                       </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Navbar

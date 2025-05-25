import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null); // ✅ Fixed: added useRef

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = '0';
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = '-350px';
    }
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#mywork" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className="nav-logo" />
      <img src={menu_open} onClick={openMenu} alt="open menu" className='nav-mob-open' />
      
      <ul ref={menuRef} className="navmenu">
        <img src={menu_close} alt="close menu" onClick={closeMenu} className='nav-mob-close' />
        {menuItems.map((item) => (
          <li
            key={item.label}
            onClick={() => setMenu(item.label.toLowerCase())}
            className={menu === item.label.toLowerCase() ? "active" : ""}
          >
            <AnchorLink className='anchor-link' offset={50} href={item.href}>
              {item.label}
            </AnchorLink>
            {menu === item.label.toLowerCase() && (
              <img src={underline} alt="underline" className="nav-underline" />
            )}
          </li>
        ))}
      </ul>

      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

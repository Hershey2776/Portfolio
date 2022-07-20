import React from 'react'
import './sidebar.css'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom';
import {IconContext} from "react-icons";
import { GrHomeRounded, GrUser, GrMailOption, GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" className="home-link" to="/">
           <IconContext.Provider value={{ className: 'react-icons' }}>
                < GrHomeRounded />
            </IconContext.Provider>
          </NavLink>
         




          <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
          <IconContext.Provider value={{ className: 'react-icons' }}>
                < GrUser />
            </IconContext.Provider>
          </NavLink>

          <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
          <IconContext.Provider value={{ className: 'react-icons' }}>
                < GrMailOption />
            </IconContext.Provider>
          </NavLink>
        
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/hershey2776">      
            <IconContext.Provider value={{ className: 'react-icons' }}>
                < GrLinkedinOption />
            </IconContext.Provider>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/hershey2776">      
            <IconContext.Provider value={{ className: 'react-icons' }}>
                < GrGithub />
            </IconContext.Provider>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/hershey2776">      
            <IconContext.Provider value={{ className: 'react-icons' }}>
                < GrMail />
            </IconContext.Provider>
            </a>
          </li>
        </ul>




        </nav>
    </div>
  )
}

export default Sidebar



import React, {useRef,useEffect} from 'react'
import { Container } from 'reactstrap'

import './Header.css'

const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Skills',
        url: '#services'
    },
    {
        display: 'Project',
        url: '#project'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
]

const Header = () => {

    const menuRef = useRef(null)

    // const headerRef = useRef(null)

    // useEffect(()=>{

    //    window.addEventListener('scroll', () =>{
    //     if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    //         headerRef.current.classList.add('header__shrink')
    //     }else{
    //         headerRef.current.classList.remove('header__shrink')
    //     }
    //    }) 

    //    return () => {
    //     window.removeEventListener('scroll')
    //    }

    // },[])
    //ref={headerRef}

    const menuToggle = () => menuRef.current.classList.toggle('menu__active')

    const handleClick = e => {
        e.preventDefault()
        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left:0,
            top: location-70,
        })
    }

  return <header className="header" >
    <Container>
        <div className="navigation">
            <div className="logo"><h5>Sorawid</h5></div>

            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav__list">

                    {
                        navLinks.map((item,index) =><li className='nav__item' key={index}>
                            <a href={item.url} onClick={handleClick}>{item.display}</a>
                        </li>)
                    }
                    <li className="nav__item">
                        <a href=""></a>
                    </li>
                </ul>
            </div>

                    <div className="nav__right">
                        {/* <button className='btn'>Let's Talk</button> */}
                        <span className='mobile__menu'><i class="ri-menu-5-line" onClick={menuToggle}></i></span>
                    </div>

        </div>

       
    </Container>
  </header>
}

export default Header

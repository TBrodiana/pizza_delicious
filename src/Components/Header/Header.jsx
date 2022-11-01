import React from 'react';
import logo from "../../assets/img/pizza-logo.png";
import style from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>

                <div className={style.logo__container}>
                    <img src={logo} alt="pizza_icon"/>
                        <h3><span>P</span>izza</h3>
                        <h4>delicious</h4>
                </div>

                <nav>
                    <div className={style.navLinks}>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza_delicious/home'>Home</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza_delicious/menu/pizza'>Menu</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza_delicious/services'>Services</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza_delicious/blog'>Blog</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza_delicious/about'>About</NavLink>
                        <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/pizza_delicious/contact'>Contact</NavLink>
                    </div>
                </nav>

            </div>
        </header>
    );
};
//
// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY;
//
//     // console.log(scrollDistance)
//
//     document.querySelectorAll('.section').forEach((el, i)=>{
//         if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance){
//             document.querySelectorAll('.nav a').forEach((el) => {
//                 if (el.classList.contains('active')){
//                     el.classList.remove('active');
//                 }
//             });
//
//             // console.log(i)
//
//             document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
//         }
//     });
// });

export default Header;
import React from 'react'
import style  from "./style.module.css";
import { Btn } from "../../components/Btn"
import { Banner } from "../../components/banner/"
import { Link } from "react-router-dom"
import logoImage from "./images/logo.svg"

export function Header() {
    return (<div className={style.container}>
    <div className={style.header__wrapper}>
<img className={style.logo} src={logoImage}/>
<div>
    <a className={style.header__number} href="">8 800 302-00-60</a>
    <p className={style.header__number_comment}>Звонок бесплатный</p>
</div>
 </div>
<div className={style.header__wrapper}>
 <ul className={style.header__menu}>
    <li><Link to="/pizza">Пицца</Link></li>
    <li><Link to="/combo">Комбо</Link></li>
    <li><Link to="">Закуски</Link></li>
    <li><Link to="">Десерты</Link></li>
    <li><Link to="">Напитки</Link></li>
    <li><Link to="">Другие товары</Link></li>
 </ul>
<Btn/>
 </div>
 <Banner/>
    </div>)
}
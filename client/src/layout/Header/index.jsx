import React from 'react'
import  style  from "./style.module.css";
import { Btn } from "../../components/Btn"
import { Banner } from "../../components/banner/"

export function Header() {
    return (<div className={style.container}>
    <div className={style.header__wrapper}>
<img src="./images/logo.svg"/>
<div>
    <a className={style.number} href="">8 800 302-00-60</a>
    <p>Звонок бесплатный</p>
</div>
 </div>
<div className={style.header__wrapper}>
 <ul>
    <li><a href="">Комбо</a></li>
    <li><a href="">Комбо</a></li>
    <li><a href="">Закуски</a></li>
    <li><a href="">Десерты</a></li>
    <li><a href="">Напитки</a></li>
    <li><a href="">Другие товары</a></li>
 </ul>
<Btn/>
 </div>
 <Banner/>
    </div>)
}
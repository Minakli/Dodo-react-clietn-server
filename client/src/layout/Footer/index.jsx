import React from 'react'
import style from "./style.module.css"
import fb from "./images/fb.svg"
import inst from "./images/inst.svg"
import ok from "./images/ok.svg"
import vk from "./images/vk.svg"
import youtube from "./images/youtube.svg"
import google from "./images/google-play.svg"
import apple from "./images/apple-store.svg"
import logo from "./images/logo.svg"

export default function Footer() {
  return (
    <footer>
      <div className={style.footer__container}>
     <div className={style.footer__upper_block}>
      <div className={style.footer__list_wrapper}>
{/* <List/>
<List/>
<List/>
<List/> */}

<ul>
  <li>Додо Пицца</li>
  <li> О нас</li>
  <li>Додо-книга</li>
  <li>Блог "Сила ума"</li>
  <li>Додо ИС</li>
</ul>
<ul>
  <li>Работа</li>
  <li>В пиццерии</li>
  <li>В контакт-центре</li>
</ul>
<ul>
  <li>Партнерам</li>
  <li>Франшиза</li>
  <li>Тнвестиции</li>
  <li>Поставщикам</li>
  <li>Предложить помещение</li>
</ul>
<ul>
  <li>Это интересно</li>
  <li>Экскурсии и мастер-классы</li>
  <li>Корпоративные заказы</li>
</ul>
</div>

<div className={style.footer__contact_block}>
<a target="_blank" href="http://google.com"><img className={style.footer__google_image} width="135" height="40" src={google} alt="google" /></a>
<a target="_blank" href="http://apple.com"><img width="135" height="40" src={apple} alt="apple" /></a>
<p className={style.footer__phone_call}>8-800-302-00-60</p>
<p className={style.footer__phone_comment}>Звонок бесплатный</p>
<p className={style.footer__mail_send}>feedback@dodopizza.com</p>

</div>
     </div>
     <div className={style.footer__middle_block}>
      <div className={style.footer__middle_text_wrapper_left}>
<p>1 396 362 874 ₽</p>
<p>Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽</p>
     </div>
<div className={style.footer__middle_text_wrapper_right}>
<p>688 пиццерий</p>
<p>в 14 странах, включая Китай, США и Великобританию</p> 
</div>
</div>

<div className={style.footer__decor_line}></div>

<div className={style.footer__lower_block}>
  <img width="276" height="22" className={style.footer__logo} src={logo} alt="logo" />
  <div className={style.footer__lower_text_container}>
    <a target="_blank" href="http://google.com" >Правовая информация</a>
    <a target="_blank" href="http://google.com" >Калорийность и состав</a>
    <a target="_blank" href="http://google.com" >Помощь  </a>
  </div>
  <ul className={style.footer__follow_buttons_block}>
<li><a target="_blank" href="http://facebook.com"><img src={fb} alt="Facebook" /></a></li>
<li><a target="_blank" href="http://instagram.com"><img src={inst} alt="Instagram" /></a></li>
<li><a target="_blank" href="http://odnoklassniki.ru"><img src={ok} alt="Ok" /></a></li>
<li><a target="_blank" href="http://vk.ru"><img src={vk} alt="Vk" /></a></li>
<li><a target="_blank" href="http://youtube.com"><img src={youtube} alt="Youtube" /></a></li>
  </ul>
</div>
</div>
    </footer>
  )
}

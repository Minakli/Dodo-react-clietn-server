import  style  from "./header.css";
export function Header() {
    return (<>
    <div>
<div>
    <img src=""></img>
    <div className={style.header__text_left}>
    <h1>додо пицца</h1>
<p>Сеть пиццерий №1 в России</p>
</div>
</div>
<div>
    <a href=""></a>
    <p></p>
</div>
 </div>
<div>
 <ul>
    <li className={style.li} onClick={() => {}}>Пицца</li>
    <li className={style.li} onClick={() => {}}>Комбо</li>
    <li className={style.li} onClick={() => {}}>Закуски</li>
    <li className={style.li} onClick={() => {}}>Десерты</li>
    <li className={style.li} onClick={() => {}}>Напитки</li>
    <li className={style.li} onClick={() => {}}>Другие товары</li>
 </ul>
<button></button>
 </div>
    </>)
}
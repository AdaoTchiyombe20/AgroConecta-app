//importação das img
import logo from "../../assets/logoImg/milho.svg";

//importação do modulo css
import style from "./header.module.css"

//importação dos icons
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";

export default function Header() {

    return(
        <header>
            <div className={style.logo}><img src={logo} alt="logo" /> <h1>AgroConecta</h1></div>
            <nav>
                <ul>
                    <li>Vegetais</li>
                    <li>Frutas</li>
                    <li>Leitaria</li>
                    <li>Carne</li>
                    <li>Mel & Conservas</li>
                </ul>
                <div className={style.search}>
                    <label htmlFor="search">
                        <IoSearch className={style.icon}/>
                    </label>
                    <input type="text" id="search" placeholder="Pesquisar produtos..."/>
                </div>
            </nav> 
            <div className={style.icons}>
                <FaRegUser className={style.icon}/>
                <FiShoppingCart className={style.icon}/>
                <FaBars className={style.iconbars}/>
            </div>           
        </header>
    )
}
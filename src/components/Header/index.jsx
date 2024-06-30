import { useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import style from '../../styles/Header.module.css'



export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="sportSee" className={style.headerImg} aria-label="logo sportSee" />
            </Link>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">Profil</NavLink>
                <NavLink to="/">Réglage</NavLink>
                <NavLink to="/">Communauté</NavLink>
            </nav>
        </header>
    );
}
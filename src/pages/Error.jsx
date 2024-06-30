import { NavLink } from "react-router-dom"
import style from "../../src/styles/Error.module.css"
export default function Error() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to='/'>Retourner sur la page d’accueil</NavLink>
        </div>
    )
}
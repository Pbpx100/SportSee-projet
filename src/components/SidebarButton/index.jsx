import style from '../../styles/SidebarButton.module.css'

export default function SidebarButton({ logo }) {
    return (
        <button className={style.sidebarButton}>
            <img src={logo} alt="" className={style.sidebarButton.logo} />

        </button>
    )

}
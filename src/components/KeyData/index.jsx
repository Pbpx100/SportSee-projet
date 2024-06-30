import style from "../../styles/KeyData.module.css"

export default function KeyData({ icon, info, text }) {
    return (
        <div className={style.container}>
            <img src={icon} alt="calories icon" />
            <div className={style.infos}>
                <div className={style.infosData}>{info}</div>
                <div className={style.infosText}>{text}</div>
            </div>
        </div>
    )
}
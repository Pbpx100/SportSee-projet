import React from "react";
import style from "../../styles/UserInfo.module.css"

export default function UserInfo({ Name }) {
    return (

        <div className={style.NameInfo}>
            <h1>{Name}</h1>
            <span>Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
    )

}
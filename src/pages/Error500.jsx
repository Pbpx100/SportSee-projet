import style from "../../src/styles/Error.module.css"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
export default function Error500() {
    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>

            <div className={style.container}>
                <h1 className={style.title}> Error HTTP 500 Internal Server Error</h1>
            </div>
        </>
    )
}
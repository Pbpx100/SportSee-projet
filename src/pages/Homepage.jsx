
import { NavLink } from 'react-router-dom'
import style from '../styles/Homepage.module.css'

//import style from '../src/index.css';



function Homepage() {
    // const [count, setCount] = useState(0)
    // //console.log(datas);
    return (
        <>
            <main className={style.main}>
                <h2 className={style.title}></h2>
                <NavLink to="user/12">Karl</NavLink>
                <NavLink to="user/18">Cecilia</NavLink>
            </main>

        </>
    )
}

export default Homepage;

import yoga from '../../assets/yoga.svg'
import swimming from '../../assets/swimming.svg'
import biking from '../../assets/biking.svg'
import haltere from '../../assets/haltere.svg';
import SidebarButton from '../SidebarButton';
import style from '../../styles/Sidebar.module.css'
export default function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <SidebarButton logo={yoga}></SidebarButton>
            <SidebarButton logo={swimming}></SidebarButton>
            <SidebarButton logo={biking}></SidebarButton>
            <SidebarButton logo={haltere}></SidebarButton>
            <p className={style.copyright}>Copyright, SportSee 2020</p>
        </aside>
    );
}
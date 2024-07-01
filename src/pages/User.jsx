import { useEffect, useState } from 'react'
import Header from '../../src/components/Header'
import Sidebar from '../../src/components/Sidebar'
import ActivitiesChart from '../../src/components/ActivitiesChart'
import style from "../styles/User.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import { getData } from '../utils/getData'
import UserInfo from '../../src/components/UserInfo'
import UserAverageSession from '../components/UserAverageSession'
import KeyData from '../components/KeyData'
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/proteines-icon.svg";
import glucidesIcon from "../assets/glucides-icon.svg";
import lipidesIcon from "../assets/lipides-icon.svg";
import UserPerformance from "../components/UserPerformance";
import ScoreChart from "../components/ScoreChart";


export default function User() {
    const { id } = useParams(); //Get directly the parameter id
    const [data, setData] = useState([]);//user data we set in the usestate
    const navigate = useNavigate();

    useEffect(() => {
        void (async () => { // Syntax for auto executing function, no need to call it after

            const response = await getData("USER_MAIN_DATA", id); // using an async function, waiting for get data to execute before doing the rest
            if (response.code === "ERR_BAD_REQUEST") {
                navigate('/Error');
            }
            //Create an error 500 page if the err_network does not work
            if (response.code === "ERR_NETWORK") {
                navigate('/Error500');
            }
            if (!response) return console.log("error") // Return error if no response
            setData(response.data);
        })()
    }, [id]);
    //console.log(data)

    if (data.length === 0) return null;
    return (
        <>

            <Header></Header>
            <Sidebar></Sidebar>
            <div className={style.content}>

                <UserInfo Name={data.userInfos.firstName}></UserInfo>
                <aside className={style.keyDataIcons}>
                    <KeyData
                        icon={caloriesIcon}
                        info={`${data.keyData.calorieCount}kCal`}
                        text="Calories"
                    />
                    <KeyData
                        icon={proteinsIcon}
                        info={`${data.keyData.proteinCount}g`}
                        text="Proteines"
                    />
                    <KeyData
                        icon={glucidesIcon}
                        info={`${data.keyData.carbohydrateCount}g`}
                        text="Glucides"
                    />
                    <KeyData
                        icon={lipidesIcon}
                        info={`${data.keyData.lipidCount}g`}
                        text="Lipides"
                    />
                </aside>
                <ActivitiesChart>
                </ActivitiesChart>
                <div className={style.charts}>
                    <UserAverageSession />
                    <UserPerformance></UserPerformance>
                    <ScoreChart data={data} />
                </div>
            </div>
        </>
    )
}

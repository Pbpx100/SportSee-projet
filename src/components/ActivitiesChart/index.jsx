import { getData } from "../../utils/getData";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import style from '../../styles/Barchar.module.css'

export default function BarCharts() {
    const { id } = useParams(); // get id param from URL
    //const id = 12
    const [data, setData] = useState([]);
    // user data, set in the useEffect below,here data is an array of objects (day, Kg, calories )

    useEffect(() => {
        void (async () => { // Syntax for auto executing function, no need to call it after
            const response = await getData("USER_ACTIVITY", id);
            if (!response) return alert("data error");
            setData(response.data.sessions);
        })();
    }, [id]);

    // format data.day
    for (let i = 0; i < data.length; i++) { data[i].day = i + 1; }

    // Make sure we have the data
    if (data.length === 0) return null;

    return (

        <div className={style.wrapper}>
            <div className={style.head}>
                <div className={style.title}>Activité quotidienne</div>
                <div className={style.legend}>
                    <div className={style.info}>
                        <span className={style.icon1}></span>
                        <div className={style.text}>Poids (kg)</div>
                    </div>
                    <div className={style.info}>
                        <span className={style.icon2}></span>
                        <div className={style.text}>Calories brûlées (kCal)</div>
                    </div>
                </div>
            </div>

            <ResponsiveContainer height={200} >
                <BarChart data={data} barGap={8} barCategoryGap={1}> {/* pass data(array of objects) to BarChart*/}
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} stroke="1 1" />
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: 14 }} dx={15} />
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide={true} />
                    <Tooltip content={'content'} />x
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

        </div>

    );
}


//const datas = getData('USER_MAIN_DATA', 12)
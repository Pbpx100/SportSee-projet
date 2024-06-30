import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/getData";
import SessionToolType from "../SessionToolType";
import style from "../../styles/UserAverageSession.module.css"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function UserAverageSession() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        void (async () => { // Syntax for auto executing function, no need to call it after
            const response = await getData("USER_AVERAGE_SESSIONS", id);
            if (!response) return console.log("error")
            console.log(response)
            const formatData = response.data.sessions.map((data) => {
                // replace data.day number by every day letter
                switch (data.day) {
                    case 1:
                        return { ...data, day: "L" };
                    case 2:
                        return { ...data, day: "M" };
                    case 3:
                        return { ...data, day: "M" };
                    case 4:
                        return { ...data, day: "J" };
                    case 5:
                        return { ...data, day: "V" };
                    case 6:
                        return { ...data, day: "S" };
                    case 7:
                        return { ...data, day: "D" };
                    default:
                        return { ...data };
                }
            });
            setData(formatData);
        })();
    }, [id]);
    //console.log(data)
    if (data.length === 0) return null;
    return (
        <div className={style.container}>
            <h2 className={style.title}>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500}
                    height={300} data={data} strokeWidth={1} onMouseMove={(e) => {
                        if (e.isTooltipActive === true) {
                            let div = document.querySelector('.bUPtxZ')
                            let windowWidth = div.clientWidth
                            let mouseXpercentage = Math.round(
                                (e.activeCoordinate.x / windowWidth) * 100
                            )
                            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                        }
                    }}>
                    <XAxis
                        type="category"
                        dataKey="day"
                        tickLine={true}
                        stroke="red"
                        padding={{ right: 5, left: 5 }}
                        tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        domain={[0, "dataMax + 30"]}
                        hide={true}
                    />
                    <Tooltip content={<SessionToolType />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
                    />
                </LineChart>

            </ResponsiveContainer>
        </div >
    )

}
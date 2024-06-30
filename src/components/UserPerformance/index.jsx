import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { getData } from "../../utils/getData";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import style from "../../styles/UsePerformance.module.css";

export default function UsePerformance() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        void (async () => { // Syntax for auto executing function, no need to call it after
            const response = await getData("USER_PERFORMANCE", id);
            if (!response) return alert("data error");
            const formatData = response.data.data.map((data) => {
                // Replace number by type of performance
                switch (data.kind) {
                    case 1:
                        return { ...data, kind: "Cardio" };
                    case 2:
                        return { ...data, kind: "Energie" };
                    case 3:
                        return { ...data, kind: "Endurance" };
                    case 4:
                        return { ...data, kind: "Force" };
                    case 5:
                        return { ...data, kind: "Vitesse" };
                    case 6:
                        return { ...data, kind: "Intensité" };
                    default:
                        return { ...data };
                }
            });
            setData(formatData);
        })();
    }, [id]);

    if (data.length === 0) return null;
    console.log(data)
    return (
        <div className={style.container}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}> {/* pass the props data(array of objects) to RadarChart */}
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                    <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
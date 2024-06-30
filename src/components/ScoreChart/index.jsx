import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import style from "../../styles/ScoreChart.module.css"

export default function ScoreChart({ data }) {
    const score = [
        { value: data.todayScore || data.score },
        { value: 1 - data.todayScore || data.score },
    ];
    return (
        <div className={style.container}>
            <h2 className={style.title}>Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={score} // pass the props score(array of objects) to Pie component
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={85}
                        startAngle={90}
                    >
                        {score.map((entry, index) =>
                            index === 0 ? (
                                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" /> // Index 0, this cell is the progression
                            ) : (
                                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
                            )
                        )}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <p className={style.text}>
                <span className={style.score}>
                    {score[0].value * 100}%<br />
                </span>
                de votre
                <br /> objectif
            </p>
        </div>
    )
}

//class à modéliser
//status 404
//500 de l'api 
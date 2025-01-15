import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts"

const data = [
    { days: 'Lundi', player: 4872 },
    { days: 'Mardi', player: 1303 },
    { days: 'Mercredi', player: 2002 },
    { days: 'Jeudi', player: 3278 },
    { days: 'Vendredi', player: 1890 },
    { days: 'Samedi', player: 8439 },
    { days: 'Dimanche', player: 3490 }
];

export function DailyPlayer() {
    return (
        <div className="bg-slate-100 p-5 m-5 rounded-md">
            <h2 className="text-lg font-bold text-gray-500">
                Joueurs par jour en moyenne cette semaine
            </h2>
            <BarChart width={400} height={200} data={data}>
                <Bar dataKey="player" fill="#4318FF"/>
                <XAxis dataKey="days"/>
                <YAxis/>
                <Tooltip/>
            </BarChart>
        </div>
    )   
}
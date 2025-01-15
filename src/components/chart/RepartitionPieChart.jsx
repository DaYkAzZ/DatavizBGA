import { Pie, PieChart, Tooltip } from "recharts";

const data = [
    { days: 'Lundi', player: 4872 },
    { days: 'Mardi', player: 1303 },
    { days: 'Mercredi', player: 2002 },
    { days: 'Jeudi', player: 3278 },
    { days: 'Vendredi', player: 1890 },
    { days: 'Samedi', player: 8439 },
    { days: 'Dimanche', player: 3490 }
];

export function RepartitionPieChart() {
    return (
        <div>
            <PieChart width={400} height={200} data={data}>
                <Pie data={data} dataKey="player" cx="50%" cy="50%" outerRadius={60} fill="#4318FF" />
                <Tooltip />
            </PieChart>
        </div>
    )
}
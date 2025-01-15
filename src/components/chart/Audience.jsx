import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    { name: 'SEP', free: 400, premium: 2400, amt: 2400 },
    { name: 'OCT', free: 1300, premium: 1398, amt: 2210 },
    { name: 'NOV', free: 200, premium: 9800, amt: 2290 },
    { name: 'DEC', free: 3278, premium: 3908, amt: 2000 },
    { name: 'JAN', free: 189, premium: 4800, amt: 2181 },
    { name: 'FEV', free: 8439, premium: 3800, amt: 2500 },
    { name: 'MAR', free: 349, premium: 10300, amt: 2100 }
];

export function Audience() {
    return (
        <div className="bg-slate-100 p-5 m-5 rounded-md">
            <h2 className="text-lg font-bold text-gray-500">
                Répartition de l'audience
            </h2>
            <LineChart width={600} height={200} data={data}>
                <Line type="monotone" dataKey="free" stroke="black" strokeWidth="2px"/>
                <Line type="monotone" dataKey="premium" stroke="#FFD200" strokeWidth="2px"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip/>
            </LineChart>
        </div>
    )
}
import React from "react";
import {
    ResponsiveContainer, BarChart, Bar, XAxis,
    YAxis, CartesianGrid, Tooltip, AreaChart, Area,
} from "recharts";
const data = [
    { name: 'Jan', dark: 90, light: 50 },
    { name: 'Feb', dark: 100, light: 80 },
    { name: 'Mar', dark: 30, light: 60 },
    { name: 'Apr', dark: 85, light: 60 },
    { name: 'May', dark: 90, light: 70 },
    { name: 'June', dark: 100, light: 80 },
    { name: 'July', dark: 85, light: 80 },
    { name: 'Aug', dark: 75, light: 30 },
    { name: 'Sep', dark: 70, light: 60 },
    { name: 'Oct', dark: 100, light: 85 },
    { name: 'Nov', dark: 40, light: 60 },
    { name: 'Dec', dark: 85, light: 65 },
    { name: 'Jan', dark: 80, light: 70 },
    { name: 'Feb', dark: 40, light: 55 },
];
const data2 = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 25 },
    { name: "Mar", value: 10 },
    { name: "Apr", value: 45 },
    { name: "May", value: 10 },
    { name: "Jun", value: 60 },
    { name: "Jul", value: 15 },
    { name: "Aug", value: 40 },
    { name: "Sep", value: 50 },
    { name: "Oct", value: 45 },
    { name: "Nov", value: 25 },
    { name: "Dec", value: 35 },
];

const Barchart = () => {
    return (
        <>
            <div>
                <h2 className=""
                style={{
                    margin:'20px'
                }}>Total Income</h2>
                <div style={{ width: "100%", height: 250 ,}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} barSize={10} barGap={10} barCategoryGap={15}>

                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <CartesianGrid stroke="#ccc" strokeDasharray="0" vertical={false} />

                            <XAxis dataKey="name" axisLine={false}
                                tick={{ fill: "#B3D4FC", fontSize: 14, fontWeight: 500 }} />
                            <YAxis hide={true} />
                            <Tooltip />
                            <Bar dataKey="dark" fill="#0047AB" radius={[6, 6, 6, 6]} />
                            <Bar dataKey="light" fill="#B3D4FC" radius={[6, 6, 6, 6]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div style={{ width: '100%', height: 300 }}>
                    <h2  style={{
                    margin:'25px'
                }}>Total Booking</h2>

                    <ResponsiveContainer width="98%" height={250}>
                        <AreaChart
                            data={data2} // ✔ correct data
                            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorBooking" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0047AB" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#0047AB" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid strokeDasharray="3 3" vertical={false} />

                            {/* 👇 hide X & Y axis */}
                            <XAxis dataKey="name" hide />
                            <YAxis hide />

                            <Tooltip />

                            <Area
                                type="basis" // 👈 smooth curve
                                dataKey="value" // 👈 was "dark" — wrong
                                stroke="#0047AB"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorBooking)"
                                dot={false}
                            />
                        </AreaChart>

                    </ResponsiveContainer>

                </div>

            </div>
        </>

    );


};
export default Barchart
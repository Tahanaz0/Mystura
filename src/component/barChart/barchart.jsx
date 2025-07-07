import React from "react";
import {
    ResponsiveContainer, BarChart, Bar, XAxis,
    YAxis, CartesianGrid, Tooltip
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
const Barchart = () => {
    return (
        <>
            <div>
                <h2>Total Income</h2>
                <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} barSize={10} barGap={10} barCategoryGap={15}>

                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" axisLine={false} />
                            <YAxis hide={true} />
                            <Tooltip />
                            <Bar dataKey="dark" fill="#0047AB" radius={[5, 5, 0, 0]} />
                            <Bar dataKey="light" fill="#B3D4FC" radius={[5, 5, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>

    );


};
export default Barchart
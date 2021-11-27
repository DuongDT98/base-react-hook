/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
    PieChart,
    Pie,
    Legend,
    Cell,
    ResponsiveContainer,
    Label,
    Tooltip
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PieChartss({ dataChart, total }) {

    const Bullet = ({ backgroundColor, size }) => {
        return (
            <div
                className="CirecleBullet"
                style={{
                    backgroundColor,
                    width: size,
                    height: size
                }}
            ></div>
        );
    };

    const CustomizedLegend = (props) => {
        const { payload } = props;

        return (
            <ul className="LegendList">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`}>
                        <div className="BulletLabel">
                            {/* <Bullet backgroundColor={entry.payload.fill} size="10px" /> */}
                            <div style={{ color: `${entry.color}` }} className="BulletLabelText">{entry.value}</div>
                        </div>
                        {/* <div style={{ marginLeft: "20px" }}>{entry.payload.value}</div> */}
                    </li>
                ))}
            </ul>
        );
    };

    const CustomLabel = ({ viewBox, labelText, value }) => {
        const { cx, cy } = viewBox;
        return (
            <g>
                <text
                    x={cx}
                    y={cy}
                    className="recharts-text recharts-label"
                    textAnchor="middle"
                    dominantBaseline="central"
                    alignmentBaseline="middle"
                    fontSize="15"
                >
                    {labelText}
                </text>
                <text
                    x={cx}
                    y={cy + 20}
                    className="recharts-text recharts-label"
                    textAnchor="middle"
                    dominantBaseline="central"
                    alignmentBaseline="middle"
                    fill="#0088FE"
                    fontSize="26"
                    fontWeight="600"
                >
                    {value}
                </text>
            </g>
        );
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
        value
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="black"
                textAnchor="middle"
                dominantBaseline="central"
            >
                {value}
            </text>
        );
    };

    return (
        <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={dataChart}
                        dataKey="value"
                        nameKey="name"
                        cx={95}
                        cy={110}
                        innerRadius={40}
                        outerRadius={82.5}
                        label={renderCustomizedLabel}
                    >
                        {dataChart.map((it, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={it.color}
                            />
                        ))}
                        <Label
                            content={<CustomLabel labelText={total} />}
                            position="center"
                        />
                    </Pie>
                    <Legend content={<CustomizedLegend className="customLegend" />} />
                    <Tooltip
                        wrapperStyle={{
                            backgroundColor: "black",
                            borderRadius: "4px",
                            border: "none",
                            fontSize: "0.75em",
                            color: "#ffffff",
                        }}
                        labelFormatter={(e) => "Ngày: " + e}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
export default PieChartss
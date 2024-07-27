import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const Chart = () => {
  return (
    <ResponsiveContainer
      height={210}
      style={{
        backgroundColor: "rgba(243, 243, 243, 0.12)",
        borderRadius: 17,
      }}
    >
      <LineChart data={data} className="!overflow-visible -translate-x-0.5">
        <CartesianGrid
          strokeDasharray="0 0 0 "
          fill="transparent"
          opacity={0.1}
        />
        <XAxis
          tick={{
            fill: "white",
            fontSize: 12,
            letterSpacing: "-0.03em",
          }}
          tickMargin={10}
          stroke="rgba(243, 243, 243, 0.22)"
          minTickGap={30}
          tickLine={false}
        />
        <YAxis
          orientation="right"
          stroke="rgba(243, 243, 243, 0.22)"
          tickMargin={8}
          minTickGap={15}
          tickLine={false}
          tick={{
            fill: "white",
            fontSize: 12,
            letterSpacing: "-0.03em",
          }}
        />
        <Line type="stepBefore" dot={false} dataKey="uv" stroke="#94c293" />
      </LineChart>
    </ResponsiveContainer>
  );
};

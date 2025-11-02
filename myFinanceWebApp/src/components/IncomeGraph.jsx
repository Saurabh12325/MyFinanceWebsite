import { VariableIcon } from "lucide-react";
import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function IncomeGraph({ incomes }) {
  const data = useMemo(() => {
    if (!incomes || incomes.length === 0) return [];
    const sorted = [...incomes].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    return sorted.map((inc) => ({
      timestamp: new Date(inc.date).getTime(),
      formattedDate: new Date(inc.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      }),
      amount: Number(inc.amount),
    }));
  }, [incomes]);

  const yRange = useMemo(() => {
    if (data.length === 0) return [0, 100];
    const values = data.map((d) => d.amount);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return [Math.floor(min * 0.9), Math.ceil(max * 1.1)];
  }, [data]);

  return (
    <div className=" rounded-lg shadow p-4 mt-6 border bg-white"> 
      <h3 className="text-lg font-semibold mb-3">Income Trend</h3>
      <ResponsiveContainer width="100%" height={300} >
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="timestamp"
            tickFormatter={(tick) =>
              new Date(tick).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
              })
            }
            tick={{ fontSize: 15, fontWeight: 'bold' }}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={yRange}
            tick={{ fontSize: 15, fontWeight: 'bold' }}
            tickFormatter={(v) => `₹${v}`}
          />
          <Tooltip
            labelFormatter={(label) =>
              new Date(label).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            }
            formatter={(value) => [`₹${value}`, "Amount"]}
            labelStyle={{ fontWeight: "bolder" }}
          />
          <Line 
            type="monotone"
            dataKey="amount"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeGraph;

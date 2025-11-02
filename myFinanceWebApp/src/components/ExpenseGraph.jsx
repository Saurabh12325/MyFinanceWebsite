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

function ExpenseGraph({ expenses }) {
  const data = useMemo(() => {
    if (!expenses || expenses.length === 0) return [];
    const sorted = [...expenses].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    return sorted.map((exp) => ({
      timestamp: new Date(exp.date).getTime(),
      formattedDate: new Date(exp.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      }),
      amount: Number(exp.amount),
    }));
  }, [expenses]);

  const yRange = useMemo(() => {
    if (data.length === 0) return [0, 100];
    const values = data.map((d) => d.amount);
    const min = Math.min(...values);
    const max = Math.max(...values);
    return [Math.floor(min * 0.9), Math.ceil(max * 1.1)];
  }, [data]);

  return (
    <div className="bg-emerald-300 rounded-lg shadow p-4 mt-6">
      <h3 className="text-lg font-semibold mb-3">Expense Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
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
            tick={{ fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={yRange}
            tick={{ fontSize: 12 }}
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
            labelStyle={{ fontWeight: "bold" }}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#e11d48"
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

export default ExpenseGraph;

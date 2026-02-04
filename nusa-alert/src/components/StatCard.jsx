import React from "react";

const StatCard = ({ label, value, colorClass }) => (
    <div className="text-center min-w-[100px]">
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</div>
        <div className={`text-lg font-bold ${colorClass}`}>{value}</div>
    </div>
);

export default StatCard;
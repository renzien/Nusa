import React from "react";
import { AlertTriangle, MessageSquare, Activity, Map as MapIcon, Navigation } from "lucide-react";

const AlertCard = ({ update }) => {
    const getColors = (status) => {
        switch(status) {
            case 'CRITICAL': return 'border-red-500/50 bg-red-500/5 text-red-200';
            case 'WARNING': return 'border-yellow-500/50 bg-yellow-500/5 text-yellow-200';
            default: return 'border-cyan-500/50 bg-cyan-500/5 text-cyan-200';  
        }
    };

    const getBadgeColor = (status) => {
        switch (status) {
            case 'CRITICAL': return 'bg-red-500 text-white';
            case 'WARNING': return 'bg-yellow-500 text-block';
            default: return 'bg-cyan-500 text-black';
        }
    };

    const getIcon = (status) => {
        switch (status) {
            case 'CRITICAL': return AlertTriangle;
            case 'WARNING': return AlertTriangle;
            default: return MessageSquare;
        }
    };

    const Icon = getIcon(update.status);
    
    return(
        <div className={`p-4 rounded-2xl border mb-3 transition-transform hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm ${getColors(update.status)}`}>
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-full ${update.status === 'CRITICAL' ? 'bg-red-500/20 animate-pulse' : 'bg-slate-700/50'}`}>
                        <Icon size={16} className={update.status === 'CRITICAL' ? 'text-red-500' : 'text-current'}/>
                    </div>
                    <h3 className="font-bold text-sm md:text-base">{update.title}</h3>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getBadgeColor(update.status)}`}>
                    {update.status}
                </span>
            </div>

            <p className="text-xs md:text-sm text-slate-400 mb-3 leading-relaxed">
                {update.desc}
            </p>

            <div className="flex items-center justify-between text-xs text-slate-500 mt-2 border-t border-dashed border-slate-700/50 pt-2">
                <div className="flex gap-3">
                    <span>{update.source}</span>
                    <span className="flex items-center gap-1"><Activity size={10} /> {update.time}</span>
                </div>
                <span className="flex items-center gap-1">{update.location}</span>
            </div>

            <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-slate-900/50 hover:bg-slate-900 text-slate-300 text-xs py-2 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2">
                    <MapIcon size={12} /> View on Map
                </button>
                <button className="flex-1 bg-slate-900/50 hover:bg-slate-900 text-slate-300 text-xs py-2 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2">
                    <Navigation size={12} /> Relay
                </button>
            </div>
        </div>
    );
};

export default AlertCard;
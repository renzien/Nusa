import React from "react";

const SidebarItem = ({ icon: Icon, label, active, collapsed }) => {
    <div className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 group
        ${active 
            ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400' 
            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
        }
    `}>

        <Icon size={20} className={active ? 'animate-pulse' : ''} />
        {!collapsed && <span className="font-medium whitespace-nowrap">{label}</span>}

        {collapsed && (
            <div className="absolute left-16 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap border border-slate-700">
                {label}
            </div>
        )}
    </div>
};

export default SidebarItem;
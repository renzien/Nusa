import React, { useState } from 'react';
import { Search, Plus, Flame, Tent, Anchor } from 'lucide-react';

// Map specific data
const MAP_MARKERS = [
  { id: 1, x: 20, y: 30, type: 'flood', label: 'Flood Zone A' },
  { id: 2, x: 55, y: 45, type: 'shelter', label: 'Shelter 4' },
  { id: 3, x: 70, y: 20, type: 'rescue', label: 'Team Alpha' },
  { id: 4, x: 40, y: 60, type: 'medical', label: 'Med Unit 1' },
  { id: 5, x: 80, y: 70, type: 'flood', label: 'Flood Zone B' },
  { id: 6, x: 30, y: 80, type: 'shelter', label: 'Shelter 2' },
];

const MapView = () => {
  const [mapMode, setMapMode] = useState('terrain');

  return (
    <div className="flex-1 bg-[#162032] rounded-3xl border border-slate-700 relative overflow-hidden group shadow-2xl min-h-[500px]">
      
      {/* Map Toolbar */}
      <div className="absolute top-4 left-4 z-10 flex bg-slate-900/90 backdrop-blur rounded-lg p-1 border border-slate-700 shadow-lg">
        <button 
          onClick={() => setMapMode('terrain')}
          className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${mapMode === 'terrain' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
        >
          Terrain
        </button>
        <button 
          onClick={() => setMapMode('satellite')}
          className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${mapMode === 'satellite' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
        >
          Satellite
        </button>
      </div>

      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button className="w-8 h-8 bg-slate-900/90 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center border border-slate-700 shadow-lg transition-transform hover:scale-110">
          <Search size={16} />
        </button>
        <button className="w-8 h-8 bg-slate-900/90 hover:bg-slate-800 text-white rounded-lg flex items-center justify-center border border-slate-700 shadow-lg transition-transform hover:scale-110">
          <Plus size={16} />
        </button>
      </div>

      {/* Simulated Map Background */}
      <div className="absolute inset-0 opacity-40">
         {/* Grid Pattern */}
         <div className="absolute inset-0" style={{ 
           backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
           backgroundSize: '40px 40px'
         }}></div>
         
         {/* SVG Roads/Rivers */}
         <svg className="w-full h-full absolute inset-0 pointer-events-none" preserveAspectRatio="none">
            <path d="M0,300 C100,280 200,350 400,320 S700,200 1000,250" fill="none" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.3" />
            <path d="M200,0 V800" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
            <path d="M600,0 V800" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
            <path d="M0,400 H1200" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
         </svg>
         
         <div className="absolute bottom-20 right-10 text-slate-600 text-6xl font-bold opacity-10 select-none">JAKARTA UTARA</div>
      </div>

      {/* Markers */}
      {MAP_MARKERS.map((marker) => (
        <div 
          key={marker.id}
          className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 group/marker"
          style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
        >
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-[#162032]
            ${marker.type === 'flood' ? 'bg-red-500 animate-pulse text-white' : ''}
            ${marker.type === 'shelter' ? 'bg-emerald-500 text-white' : ''}
            ${marker.type === 'rescue' ? 'bg-cyan-500 text-black' : ''}
            ${marker.type === 'medical' ? 'bg-white text-red-600' : ''}
          `}>
            {marker.type === 'flood' && <Flame size={20} />}
            {marker.type === 'shelter' && <Tent size={20} />}
            {marker.type === 'rescue' && <Anchor size={20} />}
            {marker.type === 'medical' && <Plus size={24} strokeWidth={3} />}
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/marker:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
            {marker.label}
          </div>
        </div>
      ))}

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl z-10 w-48 shadow-2xl">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Legend</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span> Flood Zones
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Active Shelters
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="w-3 h-3 rounded-full bg-cyan-500"></span> Rescue Teams
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="w-3 h-3 rounded-full bg-white border border-slate-500"></span> Medical Units
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
        Map updated 4 seconds ago
      </div>
    </div>
  );
};

export default MapView;
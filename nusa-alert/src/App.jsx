import React, {useState, useEffect} from "react";
import {
  LayoutDashboard, Map as MapIcon, Box, Home, MessageSquare,
  FileText, ChevronLeft, ChevronRight, Bell, User, Menu
} from 'lucide-react';

// Import Component yang udah dibuat
import SidebarItem from "./components/SidebarItem";
import StatCard from "./components/StatCard";
import AlertCard from "./components/AlertCard";
import MapView from "./components/MapView";

// Data Dummy
const UPDATES = [
  {
    id: 1,
    title: "Dam Water Level Critical",
    status: "CRITICAL",
    desc: "Katulampa Weir water level has exceeded 200cm. Immediate downstream evacuation advised for Ciliwung riverbanks.",
    source: "BPBD Jakarta",
    time: "2 min ago",
    location: "Katulampa, Bogor",
    type: "flood"
  },
  {
    id: 2,
    title: "Road Access Blocked",
    status: "WARNING",
    desc: "Puncak Pass Road (Cianjur-Bogor) blocked due to minor landslide. Alternative routes being assessed.",
    source: "Dishub",
    time: "8 min ago",
    location: "Puncak Pass",
    type: "warning"
  },
  {
    id: 3,
    title: "Basarnas Team Deployed",
    status: "INFO",
    desc: "3 additional SAR teams have been dispatched from Jakarta HQ to flood-affected areas in Bekasi.",
    source: "Basarnas Command",
    time: "15 min ago",
    location: "Bekasi Timur",
    type: "info"
  }
];

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Logic Jam
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  
}
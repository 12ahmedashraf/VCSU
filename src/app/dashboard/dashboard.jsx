'use client'
import { useState } from "react";
import { ShieldAlert,Lightbulb,Activity,Home,LogOut } from "lucide-react";
export default function DashboardUI()
{
    const [currSection, setCurrSection] = useState('');
    const dashIcons = [
    { id: 'overview', icon: Home },
    { id: 'problem' , icon: ShieldAlert },
    { id: 'suggestion', icon: Lightbulb },
    { id: 'pending', icon: Activity },
    ];
    return(
        <div className="content flex flex-col justify-center h-150">
            <div className="left flex flex-col ml-6 gap-30   text-center">
                {dashIcons.map((item) => (
                    <button 
                    key={item.id}
                    onClick={() => setCurrSection(item.id)}
                    className="black"
                    >
                    <item.icon size={22} strokeWidth={2} />
                    </button>
                ))}
            </div>
        </div>
    );
}
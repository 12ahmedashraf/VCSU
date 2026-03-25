'use client'
import { useState } from "react";
import { ShieldAlert,Lightbulb,Activity,Home,LogOut, Component } from "lucide-react";
import Overview from "@/components/overView";
export default function DashboardUI({user})
{
    const [currSection, setCurrSection] = useState(<Overview user={user}/>);
    const dashIcons = [
    { id: 'overview', icon: Home , component: <Overview user={user}/>},
    { id: 'problem' , icon: ShieldAlert },
    { id: 'suggestion', icon: Lightbulb },
    { id: 'pending', icon: Activity },
    ];
    return(
        <div className="content flex mt-10 gap-20 ">
            <div className="left flex flex-col mx-10 mt-10  gap-30 items-center justify-center text-center">
                {dashIcons.map((item) => (
                    <button 
                    key={item.id}
                    onClick={() => setCurrSection(item.component)}
                    className="hover:cursor-pointer"
                    >
                    <item.icon size={22} strokeWidth={2} />
                    </button>
                ))}
            </div>
            <div className="right">
                {currSection }</div>
        </div>
    );
}
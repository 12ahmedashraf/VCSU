'use client'
import { useState } from "react";
import { ShieldAlert,Lightbulb,Activity,Home,LogOut, Component } from "lucide-react";
import Overview from "@/components/overView";
import Problem from "@/components/submitProblem";
export default function DashboardUI({user})
{
    const [currSection, setCurrSection] = useState('overview');
    const dashIcons = [
    { id: 'overview', icon: Home },
    { id: 'problem' , icon: ShieldAlert },
    { id: 'suggestion', icon: Lightbulb },
    { id: 'pending', icon: Activity },
    ];
    const components = {
  overview: <Overview user={user} />,
  problem: <Problem user={user}/>, 
  suggestion: <div>suggestion form coming soon</div>,
  pending: <div>pending problems coming soon</div>,
};
    return(
        <div className="content flex mt-10 gap-20 ">
            <div className="left sticky top-10 h-fit flex flex-col mx-10 mt-10  gap-30 items-center justify-center text-center">
                {dashIcons.map((item) => (
                    <button 
                    key={item.id}
                    onClick={() => setCurrSection(item.id)}
                    className="hover:cursor-pointer hover:scale-110 transition-all duration-300"
                    >
                    <item.icon size={22} strokeWidth={2} />
                    </button>
                ))}
            </div>
            <div className="right flex-1">
                {components[currSection]}</div>
        </div>
    );
}
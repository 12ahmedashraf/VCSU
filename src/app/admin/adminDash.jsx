'use client'
import { useState } from "react";
import { ShieldAlert,Lightbulb,Activity,Home,LogOut, Component } from "lucide-react";
import ProblemsA from "@/components/problemsA";
import SuggestionsA from "@/components/suggestionsA";
import SubmitLog from "@/components/submitLog";
import OverviewA from "@/components/overViewA";
export default function AdminDashboard({user,pendingProblems,beingSolved,
    solved,ignoredProblems,reviewedSuggestion,suggestions,ignoredSuggestions})
{
   const [currSection, setCurrSection] = useState('overview');
       const dashIcons = [
       { id: 'overview', icon: Home },
       { id: 'problem' , icon: ShieldAlert },
       { id: 'suggestion', icon: Lightbulb },
       { id: 'pending', icon: Activity },
       ];
       const components = {
     overview: <OverviewA user={user} />,
     problem: <ProblemsA user={user}/>, 
     suggestion: <SuggestionsA user={user}/>,
     pending: <SubmitLog user={user} problems={pendingProblems} suggestions={suggestions} />,
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
'use client'
import { useState } from 'react';
import { ChevronDown, Edit2, Calendar, Lock } from 'lucide-react';
export default function Submissions({user , problems, suggestions})
{
    const [problemsExpanded,expandProblems] = useState(false);
    const [suggestionsExpanded,expandSuggestions] = useState(false);
    const [expandedElement,setExpandedElement] = useState(null);
    const [editItem,setEditItem] = useState(null);
    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(new Date(date));
    }
    const renderSection = (list) => {
        return list.map((item) => (
            <div className='flex font-league mx-2  justify-between animate-in fade-in slide-in-from-top-2 fill-mode-both bg-black rounded-3xl px-8 py-2 text-white' key={item.id}>
                <h5 className=' '>{item.title}</h5>
                <div className="item-info flex gap-3">
                    <h5>{formatDate(item.created_at)}</h5>
                    <h5>{item.status}</h5>
                </div>
            </div>
        ));
    };
    return (
        <div className="flex flex-col gap-10">
            <h1 className="font-anton text-3xl">Your <span className="text-gray-600">Submissions</span></h1>
            <div className="user-problems border-2 border-gray-500 px-3 mr-5 py-1 rounded-3xl">
                <div className= "heading-problems flex justify-between items-center m-2">
                    <h1 className="font-anton text-2xl text-black">Your problems</h1>
                    <button onClick={() => expandProblems(!problemsExpanded)}>
                        <ChevronDown size={25} strokeWidth={1.5} className={`hover:cursor-pointer ${problemsExpanded ? 'transition-transform duration-300 rotate-180' : 'transition-transform duration-300 rotate-0'}`}/>
                    </button>
                </div>
                {problemsExpanded && (
                    <div className='flex flex-col gap-5 m-2 mt-4'>
                        {renderSection(problems)}
                    </div>
                )}
            </div>
              <div className="user-suggestions border-2 border-gray-500 px-3 mr-5 py-1 rounded-3xl">
                <div className= "heading-suggestions flex justify-between items-center m-2">
                    <h1 className="font-anton text-2xl text-black">Your suggestions</h1>
                    <button onClick={() =>  expandSuggestions(!suggestionsExpanded)}>                        <ChevronDown size={25} strokeWidth={1.5} className={`hover:cursor-pointer ${suggestionsExpanded ? 'transition-transform duration-300 rotate-180' : 'transition-transform duration-300 rotate-0'}`}/></button>
                </div>
                   {suggestionsExpanded && (
                    <div className='flex flex-col gap-5 m-2 mt-4'>
                        {renderSection(suggestions)}
                    </div>
                )}
            </div>
        </div>
    );
}
'use client'
import { useState } from 'react';
import { ChevronDown} from 'lucide-react';
import EditForm from './editForm';
import UserLogs from './userLogs';
export default function Submissions({user , problems, suggestions})
{
    const [problemsExpanded,expandProblems] = useState(false);
    const [suggestionsExpanded,expandSuggestions] = useState(false);
    const [expandedElement,setExpandedElement] = useState(null);
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
    const checkEdit = (date) => {
        return ((new Date().getTime() - new Date(date).getTime()) < (24 * 60 * 60 * 1000));
    } 
    const renderExpandedElement = (item,type) => {
        if(type=='problem')
        {
            if(checkEdit(item.created_at))
                return(<EditForm item={item} type={type} />);
            else
                return(<UserLogs problem={item}/>);
           
        }
        else
        {
            return(<EditForm item={item} type={type} edit={checkEdit(item.created_at)}/>);
        }
    };
    const renderSection = (list,typee) => {
        return list.map((item) => (
            <div className="itemmm" key={item.id}>
                <div className='flex font-league mx-2  justify-between animate-in fade-in slide-in-from-top-2 fill-mode-both bg-black rounded-3xl px-8 py-2 text-white' >
                    <h5 className=' '>{item.title}</h5>
                    <div className="item-info flex gap-5 items-center">
                        <div className="text-info flex gap-3">
                            <h5>{formatDate(item.created_at)}</h5>
                            <h5>{item.status}</h5>
                        </div>
                        <button onClick={() => (expandedElement === item.id ? setExpandedElement(null) : setExpandedElement(item.id))}>
                            <ChevronDown size={25} strokeWidth={1.5} className={`hover:cursor-pointer ${expandedElement === item.id ? 'transition-transform duration-300 rotate-180' : 'transition-transform duration-300 rotate-0'}`}/>
                        </button>
                    </div>
                </div>
                <div className="expanded flex flex-col">
                { expandedElement === item.id && renderExpandedElement(item,typee)}
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
                </div>  {problemsExpanded && (
                    <div className='flex flex-col gap-5 m-2 mt-4'>
                        {renderSection(problems,'problem')}
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
                        {renderSection(suggestions,'suggestion')}
                    </div>
                )}
            </div>
        </div>
    );
}
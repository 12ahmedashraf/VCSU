'use client';
import { createClient } from "@/lib/supabase";
import { useState, useEffect } from 'react';
export default  function UserLogs({problem})
{
   const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {    
        const supabase = createClient();
        async function FetchLogs() {
            const { data } = await supabase
                .from('problem_logs')
                .select('*')
                .eq('problem_id', problem.id)
                .order('created_at', { ascending: true });
            
            setLogs(data || []);
            setLoading(false);
        }
        FetchLogs();
    }, [problem.id]);

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit', hour12: true
        }).format(new Date(date));
    }

    if (loading) return <p className="animate-pulse px-10 flex flex-col my-5 font-league  gap-2.5 rounded-2xl">Loading logs...</p>;
   
    return((logs.length==0) ? (<p className="flex flex-col font-bold my-5 font-league px-10 gap-2.5 rounded-2xl">We are still reviewing your problem!</p>)
        :(<div className="flex flex-col my-5 font-league px-10 gap-2.5 rounded-2xl font-bold">
            {
                logs.map((item) => (
                    (!item.is_internal) ? (
                    <div key={item.id} className="flex justify-between">
                        <h4>{item.note}</h4>
                        <h4>{formatDate(item.created_at)}</h4>
                    </div>     ):(<></>)
                ))
            }
        </div>)
    
    );
}
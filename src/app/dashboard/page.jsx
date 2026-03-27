import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";
import DashboardUI from "./dashboard";

export default async function Dashboard()
{
    const supabase = await createClient();
    const {data:{user},error} = await supabase.auth.getUser();
    if(!user  || error)
        redirect("/login");
    let {data : problems , error: pError} =  await supabase 
    .from('student_problems')
    .select('*')
    .eq('student_id',user.id)
    .order('created_at',{ascending:false});
    let {data: suggestions, error:sError} = await supabase
    .from('student_suggestions')
    .select('*')
    .eq('student_id',user.id)
    .order('created_at',{ascending:false});  
    if(pError || sError)
    {
        problems= [''];
        suggestions=[''];
    }
    return(
        <div className="bg-white">
            <DashboardUI user={user} problems={problems} suggestions={suggestions}/>
        </div>
    );

}
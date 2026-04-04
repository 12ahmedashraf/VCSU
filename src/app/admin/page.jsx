import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";
import AdminDashboard from "./adminDash";

export default async function AdminDash()
{
    const supabase = await createClient();
    const {data : {user},error} = await supabase.auth.getUser();
    if(error || !user)
        redirect("/login");
    const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id',user.id)
    .single();
    if (profileError || !profile) {
    redirect('/login');
}    const role =profile.role;
    if(role !== 'admin'){
        console.log(role);
        redirect('/dashboard');
    }
    const {data:problemsPending,problemsPendingError} = await supabase
    .from('student_problems')
    .select('*')
    .eq('status','pending')
    .order('created_at',{ascending:false});
    const {data:BeingSolved,BeingSolvedError} = await supabase
    .from('student_problems')
    .select('*')
    .eq('status','solving')
    .order('created_at',{ascending:false});
    const {data:Solved,SolvedError} = await supabase
    .from('student_problems')
    .select('*')
    .eq('status','solved')
    .order('created_at',{ascending:false});
    const {data:ignoredProblems,ignoredProblemsError} = await supabase
    .from('student_problems')
    .select('*')
    .eq('status','ignored')
    .order('created_at',{ascending:false});
    const {data:reviewedSuggestions,reviewedSuggestionsError} = await supabase
    .from('student_suggestions')
    .select('*')
    .eq('status','reviewed')
    .order('created_at',{ascending:false});
    const {data:pendingSuggestions,pendingSuggestionsError} = await supabase
    .from('student_suggestions')
    .select('*')
    .eq('status','pending')
    .order('created_at',{ascending:false});
    const {data:ignoredSuggestions,ignoredSuggestionsError} = await supabase
    .from('student_suggestions')
    .select('*')
    .eq('status','ignored')
    .order('created_at',{ascending:false});
    return(
        <AdminDashboard user={user} pendingProblems={problemsPending} 
        beingSolved={BeingSolved} solved={Solved}
        ignoredProblems={ignoredProblems}
        reviewedSuggestion={reviewedSuggestions}
        suggestions={pendingSuggestions}
        ignoredSuggestions={ignoredSuggestions}
        />
    );
}
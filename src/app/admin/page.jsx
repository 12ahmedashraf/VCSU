import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

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
}
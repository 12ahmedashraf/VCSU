import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";
import DashboardUI from "./dashboard";

export default async function Dashboard()
{
    const supabase = await createClient();
    const {data:{user},error} = await supabase.auth.getUser();
    if(!user  || error   )
        redirect("/login");
    return(
        <div className="bg-white">
            <DashboardUI/>
        </div>
    );

}
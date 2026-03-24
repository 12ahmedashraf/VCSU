
import AuthForm from "@/components/authForm";
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";
export default async function LogIn()
{
    const supabase = await createClient();
      const { data:{session}} = await supabase.auth.getSession();
      if (session) {
        redirect("/dashboard");
      }
    return(
        <main className="flex items-center justify-center">
        <AuthForm type={"signup"}/></main>
    );
}
'use server'
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

export default async function LogIn(prevState,formData) {
    const supabase = await createClient();
    const email = formData.get('student_email');
    const password =formData.get('student_pass');
    const {error} = await supabase.auth.signInWithPassword({email,password,});
    if(error){
        console.log(error);
        return {state:'error',message:'Invalid login credentials'}
    }

    redirect('/dashboard');

}
'use server'

import { createClient } from "@/lib/server"
import { headers } from "next/headers";

export default async function SignUp(prevState,formData) {
    const supabase = await createClient();
    const origin = (await headers()).get('origin');
    const name = formData.get('student_name');
    const classs = formData.get('student_class');
    const email =formData.get('student_email');
    const password=formData.get('student_pass');
    const {data,error} = await supabase.auth.signUp({
        email,
        password,
        options:{
            emailRedirectTo: `${origin}/auth`,
            data:{
                full_name:name,
                student_class:classs
            }
        }
    });
    if(error)
    {
        return {state : 'error', message:error.message};
    }
    if(data?.user?.identities?.length===0)
    {
        return {state : 'error', message:'this email is already registered login instead'};
    }
    return {state : 'confirm' , message:'check your email to confirm your account!',email};

}
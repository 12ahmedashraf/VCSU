import { createClient } from "@/lib/server";
import { NextResponse } from "next/server";
export  async function GET(request)
{
    const curl = new URL(request.url); 
    const code =curl.searchParams.get('code');
    if(code)
    {
            const supabase = await createClient();
            const {error} = await supabase.auth.exchangeCodeForSession(code);
            if(!error)
                return NextResponse.redirect(`${curl.origin}/dashboard`)
    }
    return NextResponse.redirect(`${curl.origin}/signup?error=auth-failed`)

}
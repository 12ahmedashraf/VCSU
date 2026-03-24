import { createClient } from "@/lib/server";
import { NextResponse } from "next/server";

export async function GET(request) {
    const supabase = await createClient();
    await supabase.auth.signOut();
    const response =NextResponse.redirect(new URL("/",request.url));
    response.headers.set('Cache-Control', 'no-store, max-age=0');
    return response;
}
'use server'

import { createClient } from "@/lib/server"

export default async function SubmitSuggestion(prevState,formData)
{
    const supabase = await createClient();
    const title= formData.get('suggestion_title');
    const description= formData.get('suggestion_description');
    const category= formData.get('suggestion_category');
    const {data : {user},error:authError} =  await supabase.auth.getUser();
    if(authError || !user)
        return {status:'error',message:'failed to submit , please LogIn'};
    if(!title || !description || !category)
        return {status:'error',message:'failed to submit , please fill all the fields'};
    const {error} = await supabase
    .from('student_suggestions')
    .insert({
        student_id: user.id,
        title: title,
        description: description,
        category: category,
        status: 'under-review'
    });
    if(error)
        return{status:'error',message:error.message};
    return {status:'success',message:'Your suggestion has been delivered to the Union successfully!'};

}
'use server'

import { createClient } from "@/lib/server"
import { revalidatePath } from "next/cache"

export default async function EditSuggestion(prevState,formData)
{
    const supabase = await createClient();
    const id =formData.get('id');
    const intent = formData.get('intent');
    const title = formData.get('suggestion_title');
    const description = formData.get('suggestion_description');
    const category = formData.get('suggestion_category');
    try {
        if (intent === 'delete') {
            const { error } = await supabase
                .from('student_suggestions')
                .delete()
                .eq('id', id);

            if (error) throw error;

            revalidatePath('/dashboard');
            return { status: 'success', message: 'Suggestion deleted successfully.' };
        }

        if (intent === 'edit') {
            if (!title || !category) return { status: 'error', message: 'Missing data' };
            const { error } = await supabase
                .from('student_suggestions')
                .update({
                    title: title,
                    category: category,
                    description: description,
                    
                })
                .eq('id', id);

            if (error) throw error;

            revalidatePath('/dashboard');
            return { status: 'success', message: 'Changes saved successfully!' };
        }
return { status: 'error', message: 'Invalid action intent.' };
    } catch (error) {
        console.error('Database Error:', error);
        return { status: 'error', message: error.message };
    }

}
'use server'

import { createClient } from "@/lib/server"
import { revalidatePath } from "next/cache"

export default async function EditProblem(prevState,formData)
{
    const supabase = await createClient();
    const id =formData.get('id');
    const intent = formData.get('intent');
    const title = formData.get('problem_title');
    const description = formData.get('problem_description');
    const problemDate = formData.get('problem_date');
    try {
        if (intent === 'delete') {
            const { error } = await supabase
                .from('student_problems')
                .delete()
                .eq('id', id);

            if (error) throw error;

            revalidatePath('/dashboard');
            return { status: 'success', message: 'Problem deleted successfully.' };
        }

        if (intent === 'edit') {
            const { error } = await supabase
                .from('student_problems')
                .update({
                    title: title,
                    description: description,
                    problem_date: problemDate,
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
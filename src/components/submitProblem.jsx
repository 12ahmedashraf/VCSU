import SubmitProblem from "@/logic/submitProblem";
import { useActionState } from "react";

export default function Problem({user})
{
    const initialState = {status: 'pending',message : ''}
  const [submitStatus,formAction,isPending] = useActionState(SubmitProblem,initialState);
    return(<>
            <h1 className="font-anton text-3xl">Submit your <span className="text-gray-600">problem</span> !</h1>

    <div className="problemForm border-black border-2 rounded-2xl flex flex-col flex-1 mr-25 mt-10">
        <form action={formAction} className="flex flex-col gap-5 mx-10 my-10">  
            <div className="problem_title gap-2.5 flex flex-col  ">
            <label htmlFor="problem_title" className="font-anton">Problem title</label>
        <input 
        type="text" 
        name="problem_title"
        id="problem_title"
        placeholder="e.g Late busses" 
        required
        className="border-2 border-gray-400 rounded-xl w-3xs px-2 py-1 placeholder:font-league font-league"></input>
        </div>
         <div className="problem_description gap-2.5 flex flex-col  ">
            <label htmlFor="problem_description" className="font-anton">Problem description</label>
        <textarea 
        type="text" 
        name="problem_description"
        id="problem_description"
        placeholder="describe your problem" 
        required
        rows={6}
        className="border-2 border-gray-400 rounded-xl w-3xlg px-2 py-1 placeholder:font-league font-league "></textarea>
        </div>
         <div className="problem_description gap-2.5 flex flex-col  ">
            <label htmlFor="problem_date" className="font-anton">Problem date</label>
        <input 
        type="date" 
        name="problem_description"
        id="problem_date"
        placeholder="describe your problem" 
        required
        className="border-2 border-gray-400 rounded-xl w-3xlg px-2 py-1 placeholder:font-league font-league "></input>
        </div>
        <div className="submitt flex justify-center">
        <button type="submit"  disabled = {(isPending)} className="font-anton  border-black rounded-2xl border-2 px-4 py-2 hover:scale-110 transition-all duration-300 hover:cursor-pointer ">
            Submit
        </button></div>
        </form>
    </div>
</>
    );
}
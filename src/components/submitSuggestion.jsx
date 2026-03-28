import SubmitSuggestion from "@/logic/submitSuggestion";
import { useActionState } from "react";

export default function Suggestion({user})
{
    const initialState = {status: 'pending',message : ''}
    const [submitStatus,formAction,isPending] = useActionState(SubmitSuggestion,initialState);
    return(
    <>
            <h1 className="font-anton text-3xl">Submit a <span className="text-gray-600">suggestion</span> !</h1>

    <div className="problemForm border-black border-2 rounded-2xl flex flex-col flex-1 mr-25 mt-10 mb-10">
        <form action={formAction} className="flex flex-col gap-5 mx-10 my-10">  
   
            <div className="suggestion_title gap-2.5 flex flex-col  ">
        <label htmlFor="suggestion_title" className="font-anton">Suggestion title</label>
        <input 
        type="text" 
        name="suggestion_title"
        id="suggestion_title"
        placeholder="e.g Late busses" 
        required
        className="border-2 border-gray-400 rounded-xl w-3xs px-2 py-1 placeholder:font-league font-league"></input>
        </div>
                 <label htmlFor="category" className="font-anton uppercase tracking-wider">
    Category
  </label>
  
  <select 
    name="suggestion_category" 
    id="suggestion_category"
    required
    defaultValue=" "
    className="
      border-2 border-gray-400 rounded-xl px-4 py-2 
      font-league text-lg bg-white
      outline-none focus:border-black focus:ring-1 focus:ring-black
      transition-all cursor-pointer 
      appearance-none 
      bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%3D%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] 
      bg-size-[1.5rem] bg-position-[right_1rem_center] bg-no-repeat
    "
  >     
        <option value="" disabled >Select a category...</option>
        <option value="facility">Facility & Maintenance</option>
        <option value="academic">Academic Issues</option>
        <option value="event">Student Union Events</option>
        <option value="services">Students&apos; services</option>
        </select>
         <div className="suggestion_description gap-2.5 flex flex-col  ">
            <label htmlFor="suggestion_description" className="font-anton">Suggestion description</label>
        <textarea 
        type="text" 
        name="suggestion_description"
        id="suggestion_description"
        placeholder="describe your suggestion" 
        required
        rows={6}
        className="border-2 border-gray-400 rounded-xl w-3xlg px-2 py-1 placeholder:font-league font-league "></textarea>
        </div>
        
        <div className="submitt flex justify-center">
        <button type="submit"  disabled = {(isPending)} className="font-anton  border-black rounded-2xl border-2 px-4 py-2 hover:scale-110 transition-all duration-300 hover:cursor-pointer ">
            Submit
        </button></div>
        {(!isPending) && (<p className={`font-league text-center  ${submitStatus.status === 'success' ? 'text-green-500' :'text-red-500'}`}><strong>{submitStatus.message}</strong></p>)
        }
        </form>
    </div>
    </>   
    );
}
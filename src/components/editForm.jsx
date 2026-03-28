import EditProblem from "@/logic/EditProblem";
import SubmitProblem from "@/logic/submitProblem";
import { useActionState ,useState} from "react";
function viewLogs({item})
{

}
export default function EditForm({item , type , edit})
{
    const initialState = {status: 'pending',message : ''};
      const [editItem,setEditItem] = useState(null);
      const [editStatus,formAction,isPending] = useActionState(EditProblem,initialState);
      const [actionType, setActionType] = useState("edit");
        return(<>
        { type === 'problem' ? (<>
        {(edit === true) ? (
        <div className="rounded-2xl flex flex-col flex-1 ">
            <form action={formAction} className="flex flex-col gap-5 mx-10 my-5">  
                <div className="problem_title gap-2.5 flex flex-col  ">
                <label htmlFor="problem_title" className="font-anton">Problem title</label>
            <input 
            type="text" 
            name="problem_title"
            id="problem_title"
            placeholder="e.g Late busses" 
            required
            defaultValue={item.title}
            disabled={!editItem}
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
            disabled={!editItem}
            defaultValue={item.description}
            className="border-2 border-gray-400 rounded-xl w-3xlg px-2 py-1 placeholder:font-league font-league "></textarea>
            </div>
             <div className="problem_date gap-2.5 flex flex-col  ">
                <label htmlFor="problem_date" className="font-anton">Problem date</label>
            <input 
            type="date"
            name="problem_date"
            id="problem_date"
            required
            disabled={!editItem}
            defaultValue={item.problem_date}
            className="border-2 border-gray-400 rounded-xl w-3xlg px-2 py-1 placeholder:font-league font-league "></input>
            </div>
            <input type="hidden" name="id" value={item.id}/>
            <input type="hidden" name="intent" value={actionType}/>
            <div className="submitt flex justify-center">
                { editItem ? <div className="flex gap-10 flex-1 justify-center">
            <button type="submit" disabled={isPending} onClick={()=> setActionType('edit')} value='edit'  className="font-anton bg-white text-black border-black rounded-2xl border-2 px-4 py-2 hover:scale-110 transition-all duration-300 hover:cursor-pointer ">
                 Submit
            </button> 
            <button type="button" onClick={(e)=> {e.preventDefault();setEditItem(null)}} className="font-anton bg-white text-black border-black rounded-2xl border-2 px-4 py-2 hover:scale-110 transition-all duration-300 hover:cursor-pointer ">
                Cancel
            </button>
            </div>: 
            <div className="flex gap-10 flex-1 justify-center">
           <button   type="button" onClick={(e)=> {e.preventDefault();setEditItem(item.id)}} className="font-anton bg-black text-white border-black rounded-2xl border-2 px-4 py-2 hover:scale-110 transition-all duration-300 hover:cursor-pointer ">
                Edit
            </button>
            <button type="submit" name='intent' value='delete' onClick={(e)=> {if (!window.confirm("Are you sure you want to delete this?")) {
            e.preventDefault();
        }else {setActionType('delete');}}} className="font-anton bg-red-700 text-white rounded-2xl border-2 px-4 py-2 hover:scale-110 transition-all duration-300 hover:cursor-pointer ">
                Delete
            </button>
            </div>
            }
            </div>
            {!isPending && editStatus?.message && (
    <p className={`font-league text-center ${editStatus.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
        <strong>{editStatus.message}</strong>
    </p>
)}
            </form>
        </div>):(<></>)}
</>):(<></>)}
    </>
        );
}
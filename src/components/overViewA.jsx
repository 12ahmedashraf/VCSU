import { ShieldAlert,Lightbulb,Activity } from "lucide-react";

export default function OverviewA({user})
{
    const dashIcons = [
        { title: 'Manage problems' ,description:'See students current submitted problems and manage them effectively!', icon: ShieldAlert },
        { title: 'View suggestions' ,description:'Look the students suggestions and ideas for improvement!', icon: Lightbulb },
        { title: 'Submit Logs' ,description:'Update students about their submissions!', icon: Activity },
        ];
    return(
<div className="flex flex-col gap-10 ">
    <h1 className="font-anton text-3xl">Hello, <span className="text-gray-600">{user?.user_metadata?.full_name}</span> !</h1>
    <div className="flex flex-col items-center w-full">
        <h1 className="font-league text-3xl">in <span className="font-anton">VCSU</span> admin dashboard you can :</h1>
        <div className="grid grid-cols-3 gap-30 mt-10 mx-30 " >
            {
                dashIcons.map((item) => (
                    <div key={item.title} className="box h-full text-black flex flex-col items-center gap-5 border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-all duration-300">
                        <item.icon size={70} strokeWidth={2}  className="hover:scale-110 transition-all duration-300 hover:cursor-pointer"/>
                    
                        <h1 className="font-anton text-xl">{item.title}</h1>
                        <p className="font-league text-center">{item.description}</p>
                    </div>
                 ) )
            }
        </div>
    </div>
</div>
    );
}
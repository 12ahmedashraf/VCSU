'use client'
import Link from "next/link";
import vcsu from "../../public/vcsu.png"
import Image from "next/image";
import { useActionState } from "react";
import SignUp from "@/logic/signup";
import LogIn from "@/logic/login";
import { useSearchParams } from "next/navigation";
export default function AuthForm({type})
{
    const initialState = {state:'normal',message:''};
    const login=(type==="login");
    const [signUpState,signUpForm,isPendingSignUp]=useActionState(SignUp,initialState);
    const [LogInstate,logInForm,isPendingLogIn]=useActionState(LogIn,initialState);
    const urlparams = useSearchParams();
    const autherror = urlparams.get('error');
    return(<>
        {(signUpState.state !='confirm') ? ( <div className="form bg-black border-2 border-white w-sm rounded-3xl my-20 flex flex-col items-center">
            <div className="my-4"><Image src={vcsu} alt="" height={60} width={60}></Image></div>
           
                <div className="form-title font-anton text-4xl ">{login ? <h1 className="">Log<span className="text-accent">In</span></h1> : <h1 className="">Sign<span className="text-accent">Up</span></h1>}</div>
                <div className=" my-7">
                    <form action={login  ? logInForm : signUpForm} className="flex flex-col gap-5 items-center">
                        {(!login) && <><div className="flex flex-col gap-2.5">
                            <label htmlFor="student_name" className="font-league">Full Name</label>
                            <input type="text" id="student_name" name="student_name" 
                            placeholder="e.g Mohamed Ahmed"
                            required
                            className="placeholder:text-gray-400 placeholder:font-league px-2 py-1 border-2 border-white rounded-lg"/>
                        </div> <div className="flex flex-col gap-2.5">
                            <label htmlFor="student_class" className="font-league">Class</label>
                            <input type="number" id="student_class" name="student_class" 
                            placeholder="e.g 27"
                            required
                            className="placeholder:text-gray-400 placeholder:font-league px-2 py-1 border-2 border-white rounded-lg"/>
                        </div></>}
                        <div className="flex flex-col gap-2.5">
                            <label htmlFor="student_email" className="font-league">Email address</label>
                            <input type="email" id="student_email" name="student_email" 
                            placeholder="username@example.com"
                            required
                            className="placeholder:text-gray-400 placeholder:font-league px-2 py-1 border-2 border-white rounded-lg"/>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <label htmlFor="student_pass" className="font-league">Password</label>
                            <input type="password" id="student_pass" name="student_pass" 
                            placeholder="............................."
                            required
                            className="placeholder:text-gray-400 placeholder:font-league px-2 py-1 border-2 border-white rounded-lg"/>
                        </div>
                        <button 
                        type="submit" 
                        disabled={isPendingLogIn || isPendingSignUp}
                        className={`mt-3 font-anton text-background text-lg px-2 py-1 hover:cursor-pointer w-20 bg-white rounded-xl ${(isPendingLogIn || isPendingSignUp) ? 'animate-pulse cursor-not-allowed ' : 'active:scale-95'}`}
                        >
                            Submit
                            </button>
                        <div className="r-u-sure text-s font-league">{login? <p>If you don&apos;t have an account <Link href="/signup" className="text-accent ">SignUp</Link></p>:<p>If you have an account <Link href="/login" className="text-accent ">LogIn</Link></p>}</div>
                        {login ?
                        ((LogInstate.state === 'error') && <p className="text-red-500 font-league">{ LogInstate.message }</p>): 
                        (((signUpState.state === 'error') && <p className="text-red-500 font-league">{signUpState.message }</p>))}
                        {autherror==='auth-failed' && <p className="text-red-500 font-league">{autherror}</p>}
                    </form>

                
            </div>
        </div>)
        : (        
            <div className="form bg-black border-2 border-white w-sm rounded-3xl my-20 flex flex-col items-center">
                <div className="my-4"><Image src={vcsu} alt="" height={60} width={60}></Image></div>
                <div className="form-title font-anton text-3xl "> <h1 className="">Confirm your <span className="text-accent">Email</span></h1> </div>
                <div className=" my-7 mx-7">
                <p className="text-accent font-league text-center ">We have sent an email to <span className="text-white font-bold">{signUpState.email}</span> with a link to confirm your email</p>
                </div>
            </div>
          )}
        </>
    );
}
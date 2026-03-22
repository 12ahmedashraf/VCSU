'use client'
import Link from "next/link";
import vcsu from "../../public/vcsu.png"
import Image from "next/image";
export default function AuthForm({type})
{
    
    const login=(type==="login");
    return(
        <div className="form bg-black border-2 border-white w-sm rounded-3xl my-20 flex flex-col items-center">
            <div className="my-4"><Image src={vcsu} alt="" height={60} width={60}></Image></div>
            <div className="form-title font-anton text-4xl ">{login ? <h1 className="">Log<span className="text-accent">In</span></h1> : <h1 className="">Sign<span className="text-accent">Up</span></h1>}</div>
            <div className=" my-7">
                    <form action="" className="flex flex-col gap-5 items-center">
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
                            <input type="pasword" id="student_pass" name="student_pass" 
                            placeholder="............................."
                            required
                            className="placeholder:text-gray-400 placeholder:font-league px-2 py-1 border-2 border-white rounded-lg"/>
                        </div>
                        <button type="submit" className="mt-3 font-anton text-background text-lg px-2 py-1 hover:cursor-pointer w-20 bg-white rounded-xl">Submit</button>
                        <div className="r-u-sure text-s font-league">{login? <p>If you don&apos;t have an account <Link href="/signup" className="text-accent ">SignUp</Link></p>:<p>If you have an account <Link href="/login" className="text-accent ">LogIn</Link></p>}</div>
                    </form>

                
            </div>
        </div>
    );
}
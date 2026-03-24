import Link from "next/link";

export default function NavBar({session}){
    return(
       (session) ?(
        <nav className="ml-6 mr-8 mt-4 mb-0   inset-x-0 flex justify-between z-10 ">
        <Link href="/" className=" font-anton text-4xl hover:text-accent transition-colors duration-300">VCSU</Link>
        <div className="links flex justify-between gap-25  font-anton text-md relative">
                  <a href="/logout" className="group relative">LogOut                            
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span></a>
                          <Link href="/settings" className="group relative ">Settings
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                          </div>
        </nav>):(
        <nav className="ml-6 mr-8 mt-4 mb-0   inset-x-0 flex justify-between z-10 ">
        <Link href="/" className="text-accent font-anton text-4xl hover:text-foreground transition-colors duration-300">VCSU</Link>
        <div className="links flex justify-between gap-25 text-foreground font-anton text-md relative">
                    <Link href="/#legacy" className="group relative" >Our Legacy                             <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                      <Link href="/#mission" className="group relative">Our Mission  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span></Link>
                        <Link href="/login" className="text-accent group relative">LogIn                            
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                          <Link href="/signup" className="text-accent group relative ">SignUp
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                          </Link>
                          </div>
        </nav>
  ));
}
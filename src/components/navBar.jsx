
export default function NavBar(){
    return(
        <nav className="ml-6 mr-8 mt-4 mb-0   inset-x-0 flex justify-between z-10 ">
        <a href="" className="text-accent font-anton text-3xl hover:text-foreground transition-colors duration-300">VCSU</a>
        <div className="links flex justify-between gap-25 text-foreground font-anton text-md relative">
                    <a href="" className="group relative" >Our Legacy                             <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
</a>
                      <a href="" className="group relative">Our Team  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span></a>
                        <a href="" className="text-accent group relative">LogIn                            
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
                          <a href="" className="text-accent group relative ">SignUp
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                          </a>
                          </div>
        </nav>
    );
}
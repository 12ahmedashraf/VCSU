
export default function NavBar(){
    return(
        <nav className="m-4 flex justify-between">
        <a href="" className="text-foreground font-anton text-3xl">VCSU</a>
        <div className="links flex justify-between gap-25 text-foreground font-anton text-md">
                    <a href="" >Our Legacy</a>
                      <a href="" >Our Team</a>
                        <a href="" className="text-accent">LogIn</a>
                          <a href="" className="text-accent">SignUp</a>
        </div>
        </nav>
    );
}
import { Facebook , Mail ,Globe,Github} from "lucide-react";
export default function Footer()
{
    return(
        <>
        <footer className="border-t-accent border-t-2 mt-20">
            <div className="links-footer flex justify-between my-20 mx-10 items-center">
                <div className="left flex justify-between items-center gap-30">
                    <div ><h1 className="text-foreground font-anton text-6xl hover:cursor-pointer hover:text-accent transition-colors duration-300">VCSU</h1></div>
                    <div className="social gap-5 flex flex-col">
                        <div><h1 className="text-foreground font-anton text-xl ">Social</h1></div>
                        <div className="social-links gap-5 flex-col flex items-center">
                                                <a 
                            href="https://www.facebook.com/vcstudentunion" 
                            target="_blank" 
                            className="text-white hover:text-accent transition-colors duration-300"
                            >
                            <Facebook size={20} strokeWidth={1.5}/>
                            </a>
                                    <a 
                            href="mailto:studentsunionvictoria@gmail.com" 
                            target="_blank" 
                            className="text-white hover:text-accent transition-colors duration-300"
                            >
                            <Mail size={20} strokeWidth={1.5}/>
                            </a>
                                    <a 
                            href="https://www.facebook.com/vcstudentunion" 
                            target="_blank" 
                            className="text-white hover:text-accent  transition-colors duration-300"
                            >
                            <Globe size={20} strokeWidth={1.5}/>
                            </a>
                        </div>
                    </div>
                    <div className="quick-links gap-5 flex flex-col">
                        <div><h1 className="text-foreground font-anton text-xl ">Quick Links</h1></div>
                        <div className="social-links gap-5 flex-col flex items-center">
                                                <a 
                            href="#" 
                            target="_blank" 
                            className="text-white hover:text-accent transition-colors duration-300 font-league"
                            >
                            <h2>Home</h2>
                            </a>
                                <a 
                            href="#legacy" 
                            className="text-white hover:text-accent transition-colors duration-300 font-league"
                            >
                            <h2>Our Legacy</h2>
                            </a>
                            <a 
                            href="#mission" 
                            className="text-white hover:text-accent transition-colors duration-300 font-league"
                            >
                            <h2>Our Mission</h2>
                            </a>
                            
                        </div>

                    </div>
                </div>
                <div className="right gap-5 flex flex-col">
                    <h1 className="font-anton text-xl">Developed by</h1>
                    <div className="developers-info flex flex-col gap-5 items-center">
                        <h2 className="font-league text-lg hover:text-accent 
                        transition-colors duration-300 hover:cursor-pointer">Ahmed Ashraf</h2>
                        <a href="https://github.com/12ahmedashraf" target="_blank"  className="text-white hover:text-accent 
                        transition-colors duration-300 font-league ">
                        <Github size={20} strokeWidth={1.5}/></a>
                        <a href="mailto:ahmed4uashraf@gmail.com" target="_blank"  className="text-white hover:text-accent 
                        transition-colors duration-300 font-league"><Mail size={20} strokeWidth={1.5}/></a>
                    </div>
                </div>
            </div>
            <div className="subfooter flex justify-center"><p className="text-foreground font-league text-sm">@2026 Victoria College Students&apos; Union</p></div>
        </footer>
        </>
    );
}
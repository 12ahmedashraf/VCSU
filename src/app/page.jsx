import Image from "next/image";
import vcsu from "../../public/vcsu.png"
import legacy from "../../public/legacy.png"
import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";
export default async function Home({ searchParams }) {
  const supabase = await createClient();
  const { data:{session}} = await supabase.auth.getSession();
  if (session) {
    redirect("/dashboard");
  }
    const params = await searchParams;
    const error= params.error;
    const errorCode = params.error_code;

    if(error === 'access_denied' || errorCode==='otp_expired')
      redirect('/signup?error=auth-failed')
  return (
    <>
   <section className="hero-section  ml-30 mr-30  flex justify-between">
    <div><Image src={vcsu} alt="victoria college students' union logo" width={375} 
        height={375} className="hover:rotate-6   transition-transform duration-300 "/> </div>
        <div className="hero-section-text flex flex-col  justify-center items-center">

          <h1 className="text-center text-8xl font-anton tracking-[30px]">Your Voice <br></br></h1>
          <h2 className="text-center text-8xl font-anton leading-loose text-accent">Matters</h2>
          <p className="font-league text-foreground text-4xl font-bold">CUNCTI . GENUS  . UNA . SUMUS</p>
        </div>
   </section>
   <div className="seperating-line flex justify-center">
    <div className="bg-[gray] h-1 w-32 mt-4 mb-15"></div>
   </div>
   <section id="legacy" className="legacy ml-20 mr-25 flex justify-between ">
    <div className="text">
      <h1 className="mb-10 font-anton text-4xl underline decoration-white underline-offset-10 decoration-4">Our <span className="decoration-[gray] underline text-accent ">Legacy</span></h1>
      <p className="font-league text-2xl">Founded in 1902, Victoria College has stood 
        for over a century as a beacon <br />of academic excellence and
         character in Alexandria. The Victoria College Students&apos; Union (VCSU) 
         was born from this long-standing tradition,not just as a governing body, 
         but as a bridge between a storied past and a limitless future. We carry 
         the weight of decades of leadership, ensuring that every Victorian who 
         walks these halls feels the strength of
         those who came before them.</p>
    </div>
    <Image src={legacy} height={1500} width={1500} alt="hi"></Image>
   </section>
    <div className="seperating-line flex justify-center">
    <div className="bg-[gray] h-1 w-32 mt-4 mb-15"></div>
   </div>
   <section id="mission" className="mission ml-20 mr-25 flex justify-between text-center">
    <div className="text">
      <h1 className="mb-10 font-anton text-4xl underline decoration-white underline-offset-10 decoration-4">Our <span className="decoration-[gray] underline text-accent ">Mission</span></h1>
      <p className="font-league text-2xl mx-30">Our mission is to ensure that every <strong>Victorian</strong> has a seat at the table. 
        We believe that a Student Union is only as strong as the voices it represents. Through the <strong>VCSU Portal</strong>, 
        we are breaking down the barriers between students and leadership, providing a transparent, 
        direct line for feedback, ideas, and concerns. 
        We are here to listen, to act, and to amplify the student 
        experience across every department of Victoria College.</p>
    </div>
   </section>
   </>
  );
}

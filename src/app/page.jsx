import Image from "next/image";
import vcsu from "../../public/vcsu.png"
export default function Home() {
  return (
   <div className="hero-section  ml-30 mr-30 flex justify-between">
    <div><Image src={vcsu} alt="victoria college students' union logo" width={390} 
        height={390} className="hover:rotate-6   transition-transform duration-300 "/> </div>
        <div className="hero-section-text flex flex-col  justify-center items-center">

          <h1 className="text-center text-8xl font-anton tracking-[30px]">Your Voice <br></br></h1>
          <h2 className="text-center text-8xl font-anton leading-loose text-accent">Matters</h2>
          <p className="font-league text-foreground text-4xl font-bold">CUNCTI . GENUS  . UNA . SUMUS</p>
        </div>
   </div>
  );
}

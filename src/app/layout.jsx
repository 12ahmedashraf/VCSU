import { Anton, League_Spartan } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import { createClient } from "@/lib/server";
const anton = Anton({
  weight: "400",
  subsets:['latin'],
  variable: "--font-anton",
  display: "swap",
});
const leagueSpartan = League_Spartan({
  subsets:['latin'],
  variable: "--font-league",
  display: "swap",

});
export const metadata = {
  title: "VCSU",
  description: "Victoria College Students' Union",
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {data:{session}} = await supabase.auth.getSession();
  return (
    <html lang="en" className={`${anton.variable} ${leagueSpartan.variable}`}>
      <body className={`${session ? 'bg-white text-black': 'bg-black text-white'}`}>
        {<NavBar session={session}/>}
        {children}
      {!session&&<Footer/>}
      </body>
    </html>
  );
}

import { Anton, League_Spartan } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${leagueSpartan.variable}`}>
      <body>
        {<NavBar/>}
        {children}
      {<Footer/>}
      </body>
    </html>
  );
}

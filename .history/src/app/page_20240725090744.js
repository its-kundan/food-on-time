import Image from "next/image";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
   <main className="bg-grey-800 ">
    <Header/>
    <div className=" className="h-screen w-screen flex justify-center items-cen"> Hero section</div>
    <Footer/>
    
    
   </main>
  );
}

import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import "./../components/css/floating_badge.css";
import Interests from "@/components/Interests";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/looper_image.jpeg')] bg-no-repeat overflow-hidden">
      <div className="flex flex-col gap-20">
        <Banner />
        
            {/* <About /> */}
            <Experience />

        <Interests />
        <Projects />
        <Footer />
      </div>

      <a className="w-webflow-badge"><p className="text-transparent bg-clip-text bg-gradient-to-r text-[12px] from-purple-700 to-orange-500 ">Made by Snehan, SX</p></a>
    </main>
  );
}

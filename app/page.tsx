"use client"
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <main className="relative max-h-min bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 font-Grotesk">
        <div className="max-w-7xl w-full max-h-max">
          <FloatingNav />
          <Hero />
          <Experience />
          <Skills/>
          <RecentProjects />
          <Footer />
        </div>
      </main>
    </>
  );
}

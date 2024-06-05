import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Login from "@/components/Login/Login";

export default function Home() {
  return (
    <section className=" mt-[11vh] min-h-screen container ">
      <header className=" container">
       <Hero/>
      </header>
      <main className=" container  bg-white pt-[1rem]">
       <Login/>
      </main>
     
    </section>
  );
}

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Traditional Courses?{" "} <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">AI Course Generator</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">AI Course Generator</span>
          </div>
          <p className="text-4xl m-5"> Custom Learning Paths, Powered by AI</p>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
    // <section className="bg-gray-50">
    //   <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    //     <div className="mx-auto max-w-xl text-center">
    //       <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
    //         AI Course Generator
    //       </h1>
    //       <p className="text-2xl m-5"> Custom Learning Paths, Powered by AI</p>

    //       <p className="mt-4 sm:text-xl/relaxed">
    //         Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace
    //       </p>

    //       <div className="mt-8 flex flex-wrap justify-center gap-4">
    //       <Link href={'/dashboard'}>
    //       <Button>Get Started</Button>
    //       </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Hero;

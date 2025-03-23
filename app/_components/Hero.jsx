import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
            AI Course Generator
          </h1>
          <p className="text-2xl m-5"> Custom Learning Paths, Powered by AI</p>

          <p className="mt-4 sm:text-xl/relaxed">
            Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={'/dashboard'}>
          <Button>Get Started</Button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

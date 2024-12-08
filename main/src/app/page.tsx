import { TypewriterTitle } from "@/components/TypewritterTittle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r min-h-screen  from-rose-100 to-teal-100 ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-semibold text-7xl text-center">
            AI <span className="text-green-600 font-bold"> note Taking </span> <br />Assistant
          </h1>
          <div className="mt-4"></div>

          <h2 className="font-semibold text-3xl text-center text-slate-700">
            <TypewriterTitle />
          </h2>
          <div className="mt-8"></div>
          <div className="flex justify-center">
            <Link href='/dashboard'>
              <Button className="bg-green-600"> Get Started  <FaArrowRight className="w-10 h-10 ml-2" /></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

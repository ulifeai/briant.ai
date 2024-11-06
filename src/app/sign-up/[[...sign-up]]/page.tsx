import { SignUp } from "@clerk/nextjs";
import { Inter, Source_Serif_4 } from "next/font/google";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`w-full flex h-screen items-center justify-between `}>
      <div className="w-1/2 h-full flex  justify-center items-end  ">
          <div className=" flex justify-center items-end  flex-col w-full h-full bg-gradient-to-r from-primary-500 to-primary-800 p-12">
            <h1 className={`text-[2.5rem] mb-8 text-white font-bold`}>Your AI builder copilot</h1>
            <h1 className="text-md text-white mb-16 ">Create a free account and make awesome apps</h1>
   
          </div>
         
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <SignUp />
        {/* <Link href="https://forms.gle/14fRoY9qboQnQeo6A">

          <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-14-1">Request early access</button>
        </Link> */}
      </div>
    </div>
  )
}
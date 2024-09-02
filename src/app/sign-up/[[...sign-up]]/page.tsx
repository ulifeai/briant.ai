import { SignUp } from "@clerk/nextjs";
import { Inter, Source_Serif_4 } from "next/font/google";
import Link from "next/link";

const source_serif = Source_Serif_4({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div className={`w-full flex h-screen items-center justify-between  ${inter.className}`}>
      <div className="w-1/2 h-full flex  justify-center items-end  ">
          <div className=" flex justify-center items-end  flex-col w-full h-full bg-gradient-to-r from-indigo-500 to-primary-500 p-12">
            <h1 className={`text-[2.5rem] mb-8 text-white font-bold `}>Your Ai automation copilot</h1>
            <h1 className="font-title text-md text-white mb-16 ">Automate and manage your app in minutes with miles.ai</h1>
   
          </div>
         
      </div>
      <div className="w-1/2 flex items-center justify-center">
        {/* <SignUp /> */}
        <Link href="https://forms.gle/14fRoY9qboQnQeo6A">

          <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-14-1">Request early access</button>
        </Link>
      </div>
    </div>
  )
}
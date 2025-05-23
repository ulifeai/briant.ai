"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, CheckCheckIcon, Clock1, File } from "lucide-react";
import Link from "next/link";

export default function LeftNav({onItemClick, activeMenu, sitemap}:{onItemClick: Function, activeMenu: string, sitemap: any}) {

    return <div className="w-56 bg-muted border-r border-border flex flex-col">
    <Link href={"/app"} className="px-4 py-2 border-b border-border">
      <img src="/logo.svg" className="h-10"/>
    </Link>
    <ScrollArea className="flex-grow">
      <div className="pt-4 space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-bold px-4 text-muted-foreground flex justify-start">
            <div>
              public pages
            </div>
          </h3>
          {sitemap?.pages.public.map((item: any, index: number)=>(
            <div className={(activeMenu == item.name ? "bg-gray-100 " : "") + "space-y-1 flex jutify-between items-center pr-8"} key={item._id} onClick={()=>onItemClick(item, "public page")}>
              <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
                {item.name}
              </Button>
              {item.blocks.length == 0 ? (
                <Clock1 className="mr-2 h-4 w-4" />
              ): (
                <CheckCheckIcon className="mr-2 h-4 w-4 text-green-500" />
              )}
            </div>
          ))}
          
          {/* <div className="space-y-1">
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
            <File className="mr-2 h-3 w-3" />
              Contact
            </Button>
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
            <File className="mr-2 h-3 w-3" />
              About
            </Button>
          </div> */}
        </div>
        <div className=" border-t pt-4 border-border">
          <h3 className="mb-2 text-sm font-bold px-4 flex justify-start text-muted-foreground">
            
            <div>
              Auth pages
            </div>              
          </h3>
          {sitemap?.pages.auth.map((item: any, index: number)=>(
            <div className={(activeMenu == item.name ? "bg-gray-100 " : "") + "space-y-1 flex jutify-between items-center pr-8"} key={item._id} onClick={()=>onItemClick(item, "__disabled__")}>
              <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
                {item.name}

              </Button>
              {item.blocks.length == 0 ? (
                <Clock1 className="mr-2 h-4 w-4" />
              ): (
                <Check className="mr-2 h-4 w-4 text-grenn-500" />
              )}

            </div>
          ))}
          {/* <div className="space-y-1 ml-0">
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
              Register
            </Button>
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
              Login
            </Button>
          </div> */}
        </div>
        <div className=" border-t pt-4 border-border">
          <h3 className="mb-2 text-sm font-bold px-4 flex justify-start text-muted-foreground">
            
            <div>
             Dashboard pages
            </div>              
          </h3>
          {sitemap?.pages.authenticated.map((item: any, index: number)=>(
            <div className={(activeMenu == item.name ? "bg-gray-100 " : "") + "space-y-1 flex jutify-between items-center pr-8"} key={item._id} onClick={()=>onItemClick(item, "__disabled__")}>
              <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
                {item.name}
              </Button>
              {item.blocks.length == 0 ? (
                <Clock1 className="mr-2 h-4 w-4" />
              ): (
                <Check className="mr-2 h-4 w-4 text-grenn-500" />
              )}
            </div>
          ))}
          {/* <div className="space-y-1 ml-0">
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
              Home
            </Button>
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
              Users
            </Button>
          </div> */}
        </div>
       
      </div>
    </ScrollArea>
  </div>
  
}
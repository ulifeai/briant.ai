import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { File } from "lucide-react";

export default function LeftNav() {
    return <div className="w-56 bg-muted border-r border-border flex flex-col">
    <div className="p-4 border-b border-border">
      Dxter.ai
    </div>
    <ScrollArea className="flex-grow">
      <div className="pt-4 space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-bold px-4 text-muted-foreground flex justify-start">
            <div>
            Static pages

            </div>
          </h3>
          <div className="space-y-1">
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
            <File className="mr-2 h-3 w-3" />
              Home
            </Button>
          </div>
          <div className="space-y-1">
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
          </div>
        </div>
        <div className=" border-t pt-4 border-border">
          <h3 className="mb-2 text-sm font-bold px-4 flex justify-start text-muted-foreground">
            
            <div>
              Auth pages
            </div>              
          </h3>
          <div className="space-y-1 ml-0">
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
              Register
            </Button>
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
              Login
            </Button>
          </div>
        </div>
        <div className=" border-t pt-4 border-border">
          <h3 className="mb-2 text-sm font-bold px-4 flex justify-start text-muted-foreground">
            
            <div>
             Dashboard pages
            </div>              
          </h3>
          <div className="space-y-1 ml-0">
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
              Home
            </Button>
            <Button variant="ghost" className="text-xs w-full justify-start font-[400]">
              <File className="mr-2 h-3 w-3" />
              Users
            </Button>
          </div>
        </div>
       
      </div>
    </ScrollArea>
  </div>
}
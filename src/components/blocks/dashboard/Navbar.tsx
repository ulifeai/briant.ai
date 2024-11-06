import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const NavbarDashboardComponent = () => {
    return (
    <header className="bg-white shadow-sm max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <Link href="/app" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto"></img>
          </Link>
         
          <div className="hidden md:block">
        
            {/* <Button key={1} variant="default" size="default" style={{
    borderRadius: "var(--button-radius)"
  }} className="whitespace-nowrap h-10  rounded-lg mx-2 px-4 py-2">
              My account
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-lg">
                <Menu className="h-6 w-6"></Menu>
                <span className="sr-only">
                  Toggle menu
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
               
              <UserButton/>
  
              </nav>
            </SheetContent>
          </Sheet> */}
                <UserButton/>
            </div>
        </div>
      </div>
    </header>
    );
  };
  
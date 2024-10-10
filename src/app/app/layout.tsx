
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';


const Navbar1Component = () => {
  return (
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-12">
        <a href="/app" className="flex items-center">
          <img src="/placeholder-image.svg" alt="Logo" className="h-8 w-auto"></img>
        </a>
       
        <div className="hidden md:block">
      
          <Button key={1} variant="default" size="default" style={{
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
             
           
              <Button key={1} variant="default" size="default" style={{
  borderRadius: "var(--button-radius)"
}} className="whitespace-nowrap h-10 mx-2 px-4 py-2">
                Logout
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
    {/* <Navbar1Component/> */}

    {children}
   </>       

  );
}


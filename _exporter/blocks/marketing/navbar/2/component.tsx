import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavItem {
  title: string;
  url: string;
  subMenuItems?: NavItem[];
}

interface HeaderProps {
  logo: {
    url?: string;
    src: string;
    alt?: string;
  };
  navItems: NavItem[];
  buttons: {
    title: string;
    variant?: string;
    size?: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({ logo, navItems, buttons }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <>
              {buttons?.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant as "default" | "outline"}
                  size={button.size as "default" | "sm" | "lg"}
                  className="whitespace-nowrap h-10 mx-2 px-4 py-2"
                  style={{ borderRadius: "var(--button-radius)" }}
                >
                  {button.title}
                </Button>
              ))}
            </>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
                <>
                  {buttons?.map((button, index) => (
                    <Button
                      key={index}
                      variant={button.variant as "default" | "outline"}
                      size={button.size as "default" | "sm" | "lg"}
                      className="whitespace-nowrap h-10 mx-2 px-4 py-2"
                      style={{ borderRadius: "var(--button-radius)" }}
                    >
                      {button.title}
                    </Button>
                  ))}
                </>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";

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
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(navItems);

  return (
    <nav className="grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-border-primary bg-background-primary px-[5%] md:min-h-18">
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              className="my-[3px] h-0.5 w-6 bg-black lg:hidden"
            />
          ))}
      </button>
      <AnimatePresence>
        <motion.div
          initial="closed"
          animate={openMenu ? "open" : "closed"}
          exit="closed"
          variants={{
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
          }}
          className="absolute left-0 top-0 z-50 flex h-dvh w-[90%] flex-col border-r border-border-primary bg-white px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <a
            href={logo.url}
            className="mb-8 mt-10 flex flex-shrink-0 lg:hidden"
          >
            <img src={logo.src} alt={logo.alt} />
          </a>
          {navItems.map((navItem, index) => (
            <div key={index} className="w-full lg:w-auto">
              {navItem.subMenuItems && navItem.subMenuItems.length > 0 ? (
                <div
                  onMouseEnter={() => !isMobile && setOpenDropdown(true)}
                  onMouseLeave={() => !isMobile && setOpenDropdown(false)}
                >
                  <button
                    className="flex w-full items-center justify-between gap-2 py-3 text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
                    onClick={() => setOpenDropdown((prev) => !prev)}
                  >
                    <span>{navItem.title}</span>
                    <AnimatePresence>
                      <motion.span
                        animate={openDropdown ? "rotated" : "initial"}
                        variants={{
                          rotated: { rotate: 180 },
                          initial: { rotate: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown />
                      </motion.span>
                    </AnimatePresence>
                  </button>
                  {openDropdown && (
                    <AnimatePresence>
                      <motion.nav
                        variants={{
                          open: {
                            visibility: "visible",
                            opacity: "var(--opacity-open, 100%)",
                            y: 0,
                          },
                          close: {
                            visibility: "hidden",
                            opacity: "var(--opacity-close, 0)",
                            y: "var(--y-close, 0%)",
                          },
                        }}
                        initial="close"
                        exit="close"
                        animate={openDropdown ? "open" : "close"}
                        className="bg-white lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
                      >
                        {navItem.subMenuItems?.map((subMenuItem, index) => (
                          <a
                            key={index}
                            href={subMenuItem.url}
                            className="block py-3 pl-[5%] text-md lg:py-2 lg:pl-4 lg:pr-8 lg:text-left lg:text-base"
                          >
                            {subMenuItem.title}
                          </a>
                        ))}
                      </motion.nav>
                    </AnimatePresence>
                  )}
                </div>
              ) : (
                <a
                  href={navItem.url}
                  className="relative block py-3 text-md lg:px-4 lg:py-2 lg:text-base"
                >
                  {navItem.title}
                </a>
              )}
            </div>
          ))}
          <div className="mt-6 lg:hidden">
            <Button
              variant={buttons[0].variant as "default" | "outline"}
              size={buttons[0].size as "default" | "sm" | "lg"}
              className="w-full whitespace-nowrap"
            >
              {buttons[0].title}
            </Button>
          </div>
        </motion.div>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
            onClick={() => setOpenMenu(false)}
          />
        )}
      </AnimatePresence>
      <a href={logo.url} className="flex min-h-16 flex-shrink-0 items-center">
        <img src={logo.src} alt={logo.alt} />
      </a>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          <Button
            variant={buttons[0].variant as "default" | "outline"}
            size={buttons[0].size as "default" | "sm" | "lg"}
            className="w-full whitespace-nowrap"
          >
            {buttons[0].title}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

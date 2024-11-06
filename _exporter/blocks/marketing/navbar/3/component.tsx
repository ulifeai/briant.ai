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
    <nav className="flex w-full items-center border-b border-primary bg-white lg:min-h-16 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-20 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={openMenu ? ["open", "rotatePhase"] : "closed"}
              variants={{
                open: {
                  translateY: 8,
                  transition: { delay: 0.1 },
                },
                rotatePhase: {
                  rotate: -45,
                  transition: { delay: 0.2 },
                },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={openMenu ? "open" : "closed"}
              variants={{
                open: {
                  width: 0,
                  transition: { duration: 0.1 },
                },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={openMenu ? ["open", "rotatePhase"] : "closed"}
              variants={{
                open: {
                  translateY: -8,
                  transition: { delay: 0.1 },
                },
                rotatePhase: {
                  rotate: 45,
                  transition: { delay: 0.2 },
                },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: {
              height: "100dvh",
              opacity: "1",
            },
            close: {
              height: "0",
              opacity: "0",
            },
          }}
          initial="close"
          exit="close"
          animate={openMenu ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className=" max-sm:overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:h-full"
        >
          {navItems.map((navItem, index) => (
            <div key={index} className="first:pt-4 lg:first:pt-0">
              {navItem.subMenuItems && navItem.subMenuItems.length > 0 ? (
                <div
                  onMouseEnter={() => !isMobile && setOpenDropdown(true)}
                  onMouseLeave={() => !isMobile && setOpenDropdown(false)}
                >
                  <button
                    className="flex w-full items-center justify-between gap-2 py-3 text-left text-sm lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
                    onClick={() => setOpenDropdown((v) => !v)}
                  >
                    <span>{navItem.title}</span>
                    <motion.span
                      variants={{
                        rotated: { rotate: 180 },
                        initial: { rotate: 0 },
                      }}
                      animate={openDropdown ? "rotated" : "initial"}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown />
                    </motion.span>
                  </button>
                  {openDropdown && (
                    <AnimatePresence>
                      <motion.nav
                        variants={{
                          open: {
                            visibility: "visible",
                            opacity: "100%",
                            y: 0,
                          },
                          close: {
                            visibility: "hidden",
                            opacity: "0",
                            y: "0%",
                          },
                        }}
                        animate={openDropdown ? "open" : "close"}
                        initial="close"
                        exit="close"
                        transition={{ duration: 0.2 }}
                        className="bg-white lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
                      >
                        {navItem.subMenuItems?.map((navItem, index) => (
                          <a
                            key={index}
                            href={navItem.url}
                            className="block py-3 pl-[5%] text-sm lg:px-4 lg:py-2 lg:text-base"
                          >
                            {navItem.title}
                          </a>
                        ))}
                      </motion.nav>
                    </AnimatePresence>
                  )}
                </div>
              ) : (
                <a
                  href={navItem.url}
                  className="block py-3 text-sm lg:px-4 lg:py-2 lg:text-base"
                >
                  {navItem.title}
                </a>
              )}
            </div>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant as "default" | "outline"}
                size={button.size as "default" | "sm" | "lg"}
                className="w-full whitespace-nowrap"
              >
                {button.title}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;

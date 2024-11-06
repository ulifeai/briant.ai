import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative z-[999] flex min-h-16 w-full items-center border-b border-b-border-primary bg-background-primary px-[5%] md:min-h-18">
      <div className="mx-auto flex size-full items-center justify-between">
        <a href={logo.url}>
          <img src={logo.src} alt={logo.alt} />
        </a>
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <Button
            variant={buttons[0].variant as "default" | "outline"}
            size={buttons[0].size as "default" | "sm" | "lg"}
            className="w-full whitespace-nowrap"
          >
            {buttons[0].title}
          </Button>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:mr-0"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <span className="relative flex size-6 flex-col items-center justify-center">
              <motion.span
                className="absolute top-[3px] h-0.5 w-full bg-black"
                animate={openMenu ? "open" : "close"}
                variants={{
                  open: {
                    width: 0,
                    transition: { duration: 0.1, ease: "easeIn" },
                  },
                  close: {
                    width: "100%",
                    transition: { duration: 0.1, delay: 0.3, ease: "linear" },
                  },
                }}
              />
              <motion.span
                className="absolute h-0.5 w-full bg-black"
                animate={openMenu ? "open" : "close"}
                variants={{
                  open: {
                    rotate: 135,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  close: {
                    rotate: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                  openSecond: {
                    rotate: 45,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  closeSecond: {
                    rotate: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
              />
              <motion.span
                className="absolute h-0.5 w-full bg-black"
                animate={openMenu ? "openSecond" : "closeSecond"}
                variants={{
                  open: {
                    rotate: 135,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  close: {
                    rotate: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                  openSecond: {
                    rotate: 45,
                    transition: {
                      duration: 0.3,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  closeSecond: {
                    rotate: 0,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  },
                }}
              />
              <motion.span
                className="absolute bottom-[3px] h-0.5 w-full bg-black"
                animate={openMenu ? "open" : "close"}
                variants={{
                  open: {
                    width: 0,
                    transition: { duration: 0.1, ease: "easeIn" },
                  },
                  close: {
                    width: "100%",
                    transition: { duration: 0.1, delay: 0.3, ease: "linear" },
                  },
                }}
              />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            variants={{
              open: { height: "100dvh" },
              close: { height: "auto" },
            }}
            animate={openMenu ? "open" : "close"}
            initial="close"
            exit="close"
            className="absolute left-0 right-0 top-full w-full overflow-hidden"
          >
            <motion.div
              variants={{
                open: { y: 0 },
                close: { y: "-100%" },
              }}
              animate={openMenu ? "open" : "close"}
              initial="close"
              exit="close"
              transition={{ duration: 0.5 }}
              className="absolute left-0 right-0 top-0 block h-[100dvh] overflow-auto bg-white px-[5%]"
            >
              <div className="-mt-18 flex h-full flex-col lg:justify-center">
                {navItems.map((navItem, index) => (
                  <div key={index}>
                    {navItem.subMenuItems && navItem.subMenuItems.length > 0 ? (
                      <div className="relative">
                        <button
                          ref={buttonRef}
                          className="static flex items-center gap-4 lg:gap-6"
                          onClick={() => setOpenDropdown((prev) => !prev)}
                        >
                          <span className="py-3 text-xl leading-[30px] lg:my-2 lg:py-2 lg:text-2xl lg:leading-[1.5]">
                            {navItem.title}
                          </span>
                          <motion.span
                            variants={{
                              rotate: { rotate: 180 },
                              initial: { rotate: 0 },
                            }}
                            animate={openDropdown ? "rotate" : "initial"}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {openDropdown && (
                            <motion.nav
                              variants={{
                                open: {
                                  height: "auto",
                                  width: "auto",
                                },
                                close: {
                                  height: 0,
                                  width: 0,
                                },
                              }}
                              animate={openDropdown ? "open" : "close"}
                              initial="close"
                              exit="close"
                              transition={{ duration: 0.2 }}
                              className="static block min-w-full overflow-hidden bg-background-primary"
                              ref={menuRef}
                            >
                              {navItem.subMenuItems?.map(
                                (subMenuItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subMenuItem.url}
                                    className="ml-6 block py-4 text-xl leading-[30px] lg:my-2 lg:py-2 lg:text-2xl lg:leading-[1.5]"
                                    onClick={() => setOpenMenu(false)}
                                    role="button"
                                  >
                                    {subMenuItem.title}
                                  </a>
                                )
                              )}
                            </motion.nav>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={navItem.url}
                        className="static block py-3 text-xl leading-[30px] lg:my-2 lg:py-2 lg:text-2xl lg:leading-[1.5]"
                      >
                        {navItem.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;

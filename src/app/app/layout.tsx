
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { UserButton } from "@clerk/nextjs";
import { Menu } from 'lucide-react';
import Link from "next/link";



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


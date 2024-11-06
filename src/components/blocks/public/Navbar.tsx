"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

function Header() {
  return (
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>
        
        <div className="hidden md:block">
          <Link href={"/sign-up"}>
            <Button key={0} variant="default" size="default"  className="whitespace-nowrap h-10 mx-2 px-4 py-2">
              Create an account
            </Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button key={1} variant="secondary" size="default"  className="whitespace-nowrap h-10 mx-2 px-4 py-2">
              Login
            </Button>
          </Link>
          
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">
                Toggle menu
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Link key={0} href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <a key={1} href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a key={2} href="/testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </a>
              <a key={3} href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a key={4} href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <Button key={0} variant="default" size="default" style={{
  borderRadius: "var(--button-radius)"
}} className="whitespace-nowrap h-10 mx-2 px-4 py-2">
                Try for Free
              </Button>
              <Button key={1} variant="secondary" size="default" style={{
  borderRadius: "var(--button-radius)"
}} className="whitespace-nowrap h-10 mx-2 px-4 py-2">
                Learn More
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
  );
}

export default Header;

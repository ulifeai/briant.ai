import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans, Urbanist } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

// import PageLoading from "@/components/custom/PageLoading";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Briant.ai",
  description: "Create fullstack app easily with ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <PageLoading></PageLoading> */}
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>  
          </body>
      </html>
    </ClerkProvider>

  );
}

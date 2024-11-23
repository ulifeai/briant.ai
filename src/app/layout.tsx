import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans, Urbanist } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleTagManager } from '@next/third-parties/google'

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
        <GoogleTagManager gtmId="G-X9RC2MSFG5" />
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
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

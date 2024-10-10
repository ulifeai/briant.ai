import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

interface FooterLink {
  label: string
  href: string
}

interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | string
  href: string
}

interface FooterProps {
  variant: 'subscribe' | 'centered' | 'social' | string
  logo: {image: string, alt: string}
  navLinks: FooterLink[]
  subscribeText?: string
  subscribeButtonText?: string
  subscribePrivacyText?: string
  socialLinks?: SocialLink[]
  legalLinks: FooterLink[]
  copyrightText: string
}

const SocialIcon = ({ platform }: { platform: SocialLink['platform'] }) => {
  switch (platform) {
    case 'facebook': return <Facebook className="h-5 w-5" />
    case 'instagram': return <Instagram className="h-5 w-5" />
    case 'twitter': return <Twitter className="h-5 w-5" />
    case 'linkedin': return <Linkedin className="h-5 w-5" />
    case 'youtube': return <Youtube className="h-5 w-5" />
  }
}

export default function Footer({
  variant,
  logo,
  navLinks,
  subscribeText,
  subscribeButtonText,
  subscribePrivacyText,
  socialLinks,
  legalLinks,
  copyrightText
}: FooterProps) {
  return (
    <footer className="container max-w-7xl w-full border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="text-2xl font-bold mb-8">{logo.image}</div>

        <div className="flex items-center flex-col space-y-5 md:flex-row justify-between space-x-8">
          
            <nav className="flex flex-wrap flex-col md:flex-row justify-center gap-6">
              {navLinks?.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm  hover:text-gray-900">
                  {link.label}
                </Link>
              ))}
            </nav>

            {variant === 'subscribe' && (
              <div className="w-full max-w-md space-y-2">
                <h3 className="text-lg font-semibold text-center">{subscribeText}</h3>
                <form className="flex space-x-2">
                  <Input type="email" placeholder="Enter your email" className="flex-grow" />
                  <Button type="submit">{subscribeButtonText}</Button>
                </form>
                <p className="text-xs text-center">
                  {subscribePrivacyText}
                </p>
              </div>
            )}

            {variant === 'social' && socialLinks && (
              <div className="flex space-x-4">
                {socialLinks?.map((link, index) => (
                  <Link key={index} href={link.href} className=" hover:text-gray-900">
                    <SocialIcon platform={link.platform} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <hr className="mt-8"></hr>
          <div  className="flex flex-col items-center space-y-8 mt-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {legalLinks?.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-gray-900">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-sm">
            {copyrightText}
          </div>
        </div>
      </div>
    </footer>
  )
}
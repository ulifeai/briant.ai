import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterLinkCol {
  title: string;
  FooterLinks: FooterLink[];
}

interface SocialLink {
  platform:
    | "facebook"
    | "instagram"
    | "twitter"
    | "linkedin"
    | "youtube"
    | string;
  href: string;
}

interface FooterProps {
  variant: "subscribe" | "centered" | "social" | string;
  logo: { src: string; alt: string };
  navLinks?: FooterLink[];
  getStartedTitle?: string;
  getStartedButtonText?: string;
  getStartedHref?: string;
  subscribeTitle?: string;
  subscribeText?: string;
  subscribeLabel?: string;
  subscribePlaceholder?: string;
  subscribeButtonText?: string;
  informationTitle?: string;
  informationLinks?: string[];
  subscribePrivacyText?: string;
  socialLinks?: SocialLink[];
  legalLinks: FooterLink[];
  copyrightText: string;
  FooterLinkCols?: FooterLinkCol[];
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
  copyrightText,
}: FooterProps) {
  return (
    <footer className="container max-w-7xl mx-auto w-full border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="text-2xl font-bold mb-8">{logo?.src}</div>

        <div className="flex items-center flex-col space-y-5 md:flex-row justify-between space-x-8">
          <nav className="flex flex-wrap flex-col md:flex-row justify-center gap-6">
            {navLinks?.map((link, index) => (
              <div key={index} className="text-sm  hover:text-gray-900">
                {link.title}
              </div>
            ))}
          </nav>

          {variant === "subscribe" && (
            <div className="w-full max-w-md space-y-2">
              <h3 className="text-lg font-semibold text-center">
                {subscribeText}
              </h3>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                />
                <Button type="submit">{subscribeButtonText}</Button>
              </form>
              <p className="text-xs text-center">{subscribePrivacyText}</p>
            </div>
          )}

          {variant === "social" && socialLinks && (
            <div className="flex space-x-4">
              {socialLinks?.map((link, index) => (
                <div key={index} className=" hover:text-gray-900">
                  {link.platform == "facebook" && (
                    <Facebook className="h-5 w-5" />
                  )}
                  {link.platform == "instagram" && (
                    <Instagram className="h-5 w-5" />
                  )}
                  {link.platform == "twitter" && (
                    <Twitter className="h-5 w-5" />
                  )}
                  {link.platform == "linkedin" && (
                    <Linkedin className="h-5 w-5" />
                  )}
                  {link.platform == "youtube" && (
                    <Youtube className="h-5 w-5" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <hr className="mt-8"></hr>
        <div className="flex flex-col items-center space-y-8 mt-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {legalLinks?.map((link, index) => (
              <div key={index} className="hover:text-gray-900">
                {link.title}
              </div>
            ))}
          </div>

          <div className="text-sm">{copyrightText}</div>
        </div>
      </div>
    </footer>
  );
}

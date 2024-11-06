import { Text } from "@/components/ui/base/text";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

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
  subscribeTitle,
  subscribeText,
  subscribePlaceholder,
  subscribeButtonText,
  informationLinks,
  informationTitle,
  socialLinks,
  legalLinks,
  copyrightText,
}: FooterProps) {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 pb-28">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <Text
              as="hero"
              className="max-w-sm font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6 py-0"
            >
              {subscribeTitle || ""}
            </Text>
            <Text as="p" className="max-w-sm text-gray-500 mb-16">
              {subscribeText || ""}
            </Text>
            <div className="sm:flex mb-2 items-center">
              <input
                type="email"
                placeholder={subscribePlaceholder}
                className="w-full mb-3 sm:mb-0 sm:mr-4 pb-4 bg-transparent border-b border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none"
              />
              <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden">
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative">{subscribeButtonText}</span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md mx-auto lg:mr-0">
              <p className="text-2xl font-semibold text-gray-900 mb-16">
                {informationTitle}
              </p>
              {informationLinks?.map((informationLink, index) => (
                <div key={index} className="pb-5 mb-5 border-b border-gray-200">
                  <a
                    href="#"
                    className="group flex items-center justify-between"
                  >
                    <span className="text-lg text-gray-500 group-hover:text-orange-900">
                      {informationLink}
                    </span>
                    <span>
                      <ArrowRight className="text-orange-900"></ArrowRight>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-200">
          <div className="lg:flex items-center">
            <div className="lg:flex items-center">
              {socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                >
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
                </a>
              ))}
            </div>
            <div className="flex mb-6 lg:mb-0 items-center">
              {legalLinks.map((legalLink, index) => (
                <a
                  key={index}
                  href={legalLink.href}
                  className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600"
                >
                  {legalLink.title}
                </a>
              ))}
            </div>
            <span className="inline-block ml-auto text-sm text-gray-500">
              {copyrightText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

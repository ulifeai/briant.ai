import { ThemeOptions } from "@/types/themeConfig"
import { atom, useAtom } from "jotai"
import { atomWithDefault, atomWithStorage } from "jotai/utils"

const data = [
    {
        "id": 1,
        "type": "navbar",
        "data": {
            version: 1,
            logo: "/placeholder-image.svg",
            navItems: [
                { title: "Home", url: "/" },
                { title: "Features", url: "/features" },
                { title: "Pricing", url: "/pricing" },
                { title: "About", url: "/about" },
            ],
            buttons: [
                { title: "Features", variant: "default", size: "default" },
                { title: "Read more", variant: "default", size: "default" },
            ],
        }
    },
    {
        "id": 2,
        "type": "header",
        "data": {
            "version": 1,
            "tag": "Welcome",
            "title": "Create Stunning Websites Effortlessly with Our AI-Powered Tool",
            "description": "Use our advanced AI capabilities to design, customize, and deploy your websites with ease. Enjoy a range of features enabling quick setup and seamless operations.",
            buttons: [
                { title: "Features", variant: "default", size: "default" },
                { title: "Read more", variant: "default", size: "default" },
            ],
            "image": {
                "image": "/placeholder-image.svg",
                "alt": "AI website tool interface"
            }
        }
    },
    {
        "id": 3,
        "type": "feature",
        "data": {
            "version": 2,
            "tag": "Design",
            "title": "AI-Powered Design Functionality",
            "description": "Experience drag-and-drop capabilities, extensive template customization options, and real-time previews allowing you to create visually stunning websites effortlessly. Our AI tools help you design a website that's uniquely yours in just a few clicks.",
            "image": {
                "image": "/placeholder-image.svg",
                "alt": "Drag and drop design functionality"
            },
            buttons: [
                { title: "Features", variant: "default", size: "default" },
                { title: "Read more", variant: "default", size: "default" },
            ],

        }
    },
    {
        "id": 4,
        "type": "feature",
        "data": {
            "version": 2,
            "tag": "Deployment",
            "title": "Exceptional Deployment Benefits",
            "description": "Enjoy the benefits of SEO-friendly pages, quick loading times, and responsive designs optimized for all devices. Our AI tool ensures your website performs well and adapts smoothly to different screen sizes.",
            "image": {
                "image": "/6519354.jpg",
                "alt": "Friendly deployment features"
            },
            buttons: [
                { title: "Features", variant: "default", size: "default" },
                { title: "Read more", variant: "default", size: "default" },
            ],

        }
    },
    {
        "id": 5,
        "type": "testimonial",
        "data": {
            "version": 1,
            "heading": "Our Happy Customers",
            "description": "Here’s what our users have to say about our AI tool.",
            "testimonials": [
                {
                    "image": {
                        "src": "/6519354.jpg",
                        "alt": "Company Logo"
                    },
                    "quote": "This AI tool made web designing incredibly easy for me. I could drag and drop elements and visualize changes in real time. Highly recommended!",
                    "avatar": {
                        "src": "/6519354.jpg",
                        "alt": "Customer"
                    },
                    "name": "John Doe",
                    "position": "Entrepreneur",
                    "companyName": "Doe Solutions",
                    "location": "Los Angeles, CA"
                },
                {
                    "image": {
                        "src": "/6519354.jpg",
                        "alt": "Company Logo"
                    },
                    "quote": "Our website was up and running in no time. The seamless customization and user-friendly options are exceptional.",
                    "avatar": {
                        "src": "/6519354.jpg",
                        "alt": "Customer"
                    },
                    "name": "Jane Smith",
                    "position": "Developer",
                    "companyName": "Tech Innovations",
                    "location": "New York, NY"
                }
            ]
        }
    },
    {
        "id": 6,
        "type": "cta",
        "data": {
            "version": 1,
            "tag": "Take Action",
            "title": "Get Started with Our AI-Powered Website Tool Today",
            "description": "Transform your website creation experience with ease and efficiency using our AI tool. Join thousands of happy users and create the perfect website effortlessly.",
            buttons: [
                { title: "Features", variant: "default", size: "default" },
                { title: "Read more", variant: "link", size: "default" },
            ],

            "image": {
                "image": "/6519354.jpg",
                "alt": "Call to Action Image"
            }
        }
    },
    {
        "id": 7,
        "type": "faq",
        "data": {
            "version": 1,
            "questions": [
                {
                    "title": "What features does the AI tool support?",
                    "answer": "Our tool supports drag-and-drop capabilities, template customization, real-time preview, SEO optimization, and responsive design."
                },
                {
                    "title": "How much does the tool cost?",
                    "answer": "The pricing details are available on our pricing page. We offer different plans tailored to various needs."
                },
                {
                    "title": "Is there any customer support available?",
                    "answer": "Yes, we offer 24/7 customer support to assist you with any queries or issues you might face."
                }
            ],
            "button": {
                "title": "Contact Us",
                "variant": "default"
            },
            "tag": "FAQs",
            "title": "FAQs",
            "description": "Frequently asked questions about our AI website tool.",
            "cta_title": "Need more help?",
            "cta_description": "Our support team is here to assist you."
        }
    },
    {
        "id": 8,
        "type": "footer",
        "data": {
            "version": 1,
            variant: 'subscribe',
            logo: {
                image: '/logo.png',
                alt: 'Company Logo',
            },
            navLinks: [
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
            ],
            subscribeText: 'Subscribe to our newsletter for the latest updates!',
            subscribeButtonText: 'Subscribe',
            subscribePrivacyText: 'We respect your privacy. Unsubscribe anytime.',
            socialLinks: [
                { platform: 'facebook', href: 'https://facebook.com/company' },
                { platform: 'instagram', href: 'https://instagram.com/company' },
                { platform: 'twitter', href: 'https://twitter.com/company' },
                { platform: 'linkedin', href: 'https://linkedin.com/company' },
                { platform: 'youtube', href: 'https://youtube.com/company' },
            ],
            legalLinks: [
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
            ],
            copyrightText: '© 2024 Company Name. All rights reserved.',
        }
    }
]


const configAtom = atomWithStorage("websiteContent", {
    pageCode: []
})

export function useWebsiteContent() {
    return useAtom(configAtom)
}
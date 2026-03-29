import { NextResponse } from "next/server";

const headerData = [
    { label: 'About us', href: '/#aboutus' },
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/#work' },
    { label: 'Team', href: '/#team' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Awards', href: '/#awards' },
    { label: 'Contact', href: '/contact' },
];

const footerData = {
    brand: {
        name: "SOFTYSTA",
        tagline: "We believe that great UI/UX design is not just about visual appeal. It’s about building meaningful, user-focused digital experiences that solve real problems.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://x.com/softysta25"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://www.linkedin.com/company/softysta/"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://www.instagram.com/softysta/"
            }
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/#aboutus" },
            { name: "Work", url: "/#work" },
            { name: "Services", url: "/#services" },
            { name: "Pricing", url: "/#pricing" }
        ]
    },
    otherPages: {
        name: "Other Pages",
        links: [
            { name: "Error 404", url: "/not-found" },
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
            { name: "Privacy Policy", url: "/privacy-policy" }
        ]
    },
    contactDetails: {
        name:"Contact Details",
        address: "Barisal, Bangladesh",
        email: "softysta@gmail.com",
        phone: "+880 9638-209420"
    },
    copyright: `©${new Date().getFullYear()} SOFTYSTA | All Rights Reserved`
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData
  });
};
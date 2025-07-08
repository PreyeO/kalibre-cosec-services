import Image from "next/image";
import React from "react";
import FooterHeading from "../ui/typography/FooterHeading";
import Link from "next/link";
import { legalLinks, quickLinks, socials } from "@/data";

const Footer = () => {
  return (
    <footer className="bg-[#001529] pb-[10px] md:px-[50px] px-5 pt-[50px]">
      <div className="md:flex flex-row gap-[50px] ">
        <div className="flex flex-col ">
          <Image
            src="/footer-logo.svg"
            alt="company logo"
            width={158.02}
            height={50}
            className=""
            priority
          />
          <p className="text-[#A8A9AD] text-sm font-secondary font-medium pt-5">
            Governance. Strategy. Compliance.
          </p>
          <div className="mt-[28px] md:flex gap-[10px] text-white hidden">
            {socials.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30px] h-[30px] bg-white/20 rounded-full flex items-center justify-center"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="pt-5 font-primary text-[#A8A9AD] text-[12px] font-normal md:block hidden">
            © {new Date().getFullYear()} Kalibre Cosec. All Rights Reserved.
          </p>
        </div>

        <div className="border border-[#A8A9AD]/10 hidden lg:block"></div>
        <div className="flex flex-col gap-6 mt-[30px] lg:mt-0">
          <FooterHeading heading="Quick Links" />
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 text-[#A8A9AD] text-sm font-secondary font-medium"
            >
              <Link href={link.href}>{link.title}</Link>
            </div>
          ))}
        </div>
        <div className="border border-[#A8A9AD]/10 hidden lg:block"></div>
        <div className="flex flex-col gap-6 text-[#A8A9AD] text-sm font-secondary font-medium pt-[35px] lg:pt-0">
          <FooterHeading heading="Legal" />
          {legalLinks.map((link, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <Link href={link.href}>{link.title}</Link>
            </div>
          ))}
        </div>
        <div className="border border-[#A8A9AD]/10 hidden lg:block"></div>
        <div className="flex flex-col gap-6 text-[#A8A9AD] text-sm font-secondary font-medium pt-[35px] lg:pt-0">
          <FooterHeading heading="Contact Us" />
          <div className="flex flex-col gap-4">
            <Link href="">info@kalibrecosec.org</Link>
            <Link href="">+2348028890404</Link>
          </div>
        </div>

        <div className="mt-[28px] flex gap-[10px] text-white md:hidden">
          {socials.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] bg-white/20 rounded-full flex items-center justify-center"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="pt-5 font-primary text-[#A8A9AD] text-[12px] font-normal md:hidden ">
          © {new Date().getFullYear()} Kalibre Cosec. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

interface CardProps {
    title: string;
    subtitle: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    href: string;
  }

const Contact = () => {
  return (
    <div className="p-4" id="contact">
        <p className="text-2xl text-gray-100 font-semibold mb-2 flex justify-center items-center">Contact Me</p>
        <div className="flex flex-wrap gap-4 justify-center items-center py-4">
            <Card
            title="WhatsApp"
            subtitle="+266 56120463"
            href="https://wa.me/26656120463"
            Icon={FaWhatsapp}
            />
            <Card
            title="Email"
            subtitle="leonardfuma26@gmail.com"
            href="mailto:leonardfuma26@gmail.com"
            Icon={FiMail}
          />
        </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-96 p-4 rounded border-[1px] border-[#204E51] relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-s[#204E51] to-[#204E51] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[#204E51] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-50 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-600 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Contact;
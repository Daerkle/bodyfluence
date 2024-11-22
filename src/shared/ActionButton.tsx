import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  className?: string;
};

const ActionButton = ({ children, setSelectedPage, className }: Props) => {
  return (
    <AnchorLink
      className={`${className || ""} group relative rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 px-10 py-2 text-white transition duration-300 hover:from-primary-600 hover:to-secondary-600`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {/* Glow effect */}
      <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-70"></span>
      
      {/* Button content */}
      <span className="relative flex items-center gap-2">
        {children}
        <svg
          className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </AnchorLink>
  );
};

export default ActionButton;

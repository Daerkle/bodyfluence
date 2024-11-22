import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  className?: string;
  children?: React.ReactNode;
};

const Link = ({ page, selectedPage, setSelectedPage, className = "", children }: Props) => {
  const isSelected = selectedPage === page;
  
  return (
    <AnchorLink
      className={`${className} group relative px-4 py-2 font-bold transition-all duration-300
        ${isSelected ? "text-primary-100" : "text-gray-100 hover:text-primary-100"}`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
      data-testid={`nav-link-${page}`}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 bg-opacity-10 backdrop-blur-lg transition-all duration-300 group-hover:opacity-100"></div>
      <span className="relative">
        {children}
      </span>
      {isSelected && (
        <div className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-primary"></div>
      )}
    </AnchorLink>
  );
};

export default Link;

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Menu, X, Phone } from "lucide-react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-primary-100 shadow-lg";

  return (
    <nav>
      <div className={`${navbarBackground} fixed top-0 z-30 w-full py-6 transition duration-300`}>
        <div className="mx-auto w-5/6">
          <div className="flex items-center justify-between gap-16">
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} className="h-12" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className="flex items-center justify-between w-full">
                {/* INNER LEFT SIDE */}
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link
                    page={SelectedPage.Home}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.Benefits}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.OurClasses}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.ContactUs}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* INNER RIGHT SIDE */}
                <div className="flex items-center justify-between gap-8">
                  <button className="text-sm hover:text-red-500 transition duration-300">
                    Sign In
                  </button>
                  <a
                    href="https://wa.me/+491234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 hover:bg-red-600 transition duration-300"
                  >
                    <Phone className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                  <button className="glass-button bg-red-500 hover:bg-red-600 text-sm">
                    Become a Member
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-red-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page={SelectedPage.Home}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.Benefits}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.OurClasses}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.ContactUs}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

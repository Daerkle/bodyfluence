import Logo from '/logo.png?url';
import { Youtube, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "TikTok",
    href: "https://tiktok.com/@marcogottle",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@marcogottle",
    icon: Youtube,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/marcogottle",
    icon: Instagram,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] py-16 border-t border-white/10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="h-8" />
          <p className="my-5 text-white/60">
            Marco Fischer - Dein Performance Coach für persönliche Transformation.
            Erreiche dein volles Potenzial durch individuelles Coaching, effektive
            Trainingsmethoden und nachhaltige Veränderung.
          </p>
          <p className="text-white/40">&copy; {new Date().getFullYear()} OAKMIND. Alle Rechte vorbehalten.</p>
          <div className="mt-6 flex gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#90D5FF] transition-colors"
                aria-label={item.name}
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9, rotateX: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const BenefitCard = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="group relative mt-5 rounded-xl px-5 py-16 text-center transition-all duration-500 hover:-translate-y-2"
      style={{ perspective: "1000px" }}
    >
      {/* Glass Background */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-white/10 shadow-xl backdrop-blur-lg transition-all duration-500 group-hover:bg-white/20"></div>
      
      {/* Gradient Border */}
      <div className="absolute inset-0 -z-20 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 opacity-30 blur-sm transition-all duration-500 group-hover:opacity-50"></div>

      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="relative rounded-full bg-primary-100 p-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm"></div>
          <div className="relative z-10 text-gray-800">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h4 className="font-bold text-white">{title}</h4>
        <p className="my-3 text-gray-200">{description}</p>
        <AnchorLink
          className="text-sm font-bold text-primary-500 underline transition-colors hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Mehr erfahren</p>
        </AnchorLink>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full border border-primary-500/30"></div>
      <div className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full border border-secondary-500/30"></div>
    </motion.div>
  );
};

export default BenefitCard;

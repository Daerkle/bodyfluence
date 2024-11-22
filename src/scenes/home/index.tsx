import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HeroImage from "@/assets/hero.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Flame, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const heroTexts = [
  "TRANSFORM DEIN LEBEN",
  "ERREICHE DEINE ZIELE",
  "WERDE STÄRKER",
  "BLEIB MOTIVIERT"
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="gap-16 py-10 md:h-full md:pb-0 relative overflow-hidden"
    >
      {/* Decorative Lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-px h-32 bg-red-500/20 animate-pulse"></div>
        <div className="absolute top-40 left-1/3 w-px h-48 bg-red-500/20 animate-pulse delay-75"></div>
        <div className="absolute top-60 left-2/3 w-px h-64 bg-red-500/20 animate-pulse delay-150"></div>
        <div className="absolute top-20 right-1/4 w-px h-32 bg-red-500/20 animate-pulse delay-200"></div>
      </div>

      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="container-custom mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative h-24"> {/* Fixed height container for text */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTextIndex}
                  initial={{ rotateX: -90, opacity: 0, y: 20 }}
                  animate={{ rotateX: 0, opacity: 1, y: 0 }}
                  exit={{ rotateX: 90, opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-4xl font-bold tracking-wider text-red-500 absolute w-full text-center md:text-left"
                >
                  {heroTexts[currentTextIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p 
              className="mt-16 text-sm md:text-base text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Dein Weg zu einem stärkeren, gesünderen Ich beginnt hier. 
              Mit modernster Ausstattung und persönlicher Betreuung 
              unterstützen wir dich dabei, über dich hinauszuwachsen.
            </motion.p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="rounded-md bg-red-500 px-10 py-2 hover:bg-red-600 transition duration-300 hover:scale-105 transform"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Jetzt durchstarten
            </AnchorLink>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="mt-8 grid grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <Dumbbell className="h-6 w-6 text-red-500 group-hover:animate-bounce" />
                <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="mt-2 text-sm font-semibold">Moderne Geräte</h3>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <Heart className="h-6 w-6 text-red-500 group-hover:animate-pulse" />
                <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="mt-2 text-sm font-semibold">Persönliche Betreuung</h3>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="relative">
                <Flame className="h-6 w-6 text-red-500 group-hover:animate-ping" />
                <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="mt-2 text-sm font-semibold">Effektives Training</h3>
            </div>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img alt="hero-image" src={HeroImage} className="w-full max-w-[500px]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  SparklesIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import BenefitCard from "./BenefitCard";
import ActionButton from "@/shared/ActionButton";
import TrainingImage from "@/assets/training.jpg";

const benefits = [
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Persönliche Betreuung",
    description:
      "Individuell auf dich abgestimmtes Training und Ernährungsplan. Gemeinsam erreichen wir deine Ziele.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expertise",
    description:
      "Profitiere von jahrelanger Erfahrung und wissenschaftlich fundiertem Wissen im Bereich Fitness und Ernährung.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Gesundheit",
    description:
      "Deine Gesundheit steht an erster Stelle. Wir optimieren deine Ernährung und Bewegung für mehr Vitalität.",
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Transformation",
    description:
      "Erlebe eine komplette Transformation deines Körpers und deines Lebensstils.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="basis-3/5 font-montserrat text-3xl font-bold text-white">
            MEHR ALS NUR EIN TRAINING
          </h2>
          <p className="my-5 text-gray-400">
            Wir bieten dir ein ganzheitliches Konzept für deinen Erfolg. Von
            professionellem Training über ausgewogene Ernährung bis hin zu
            mentaler Stärke - bei uns erhältst du alles aus einer Hand.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <div className="relative">
            <div className="before:absolute before:-bottom-20 before:-right-20 before:z-[1]">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  className="rounded-lg"
                  alt="benefits-page-graphic"
                  src={TrainingImage}
                />
                <div className="absolute -inset-4 -z-10 rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl"></div>
              </motion.div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h2 className="font-montserrat text-3xl font-bold text-white">
                  MILLIONEN VON ZUFRIEDENEN MITGLIEDERN{" "}
                  <span className="text-primary-500">FIT UND GESUND</span>
                </h2>
              </motion.div>
              <div className="absolute -inset-4 -z-10 rounded-lg bg-black/30 backdrop-blur-sm"></div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-gray-400">
                Wir sind stolz darauf, bereits tausenden Menschen dabei geholfen zu
                haben, ihre Fitnessziele zu erreichen. Unsere Erfolgsgeschichten
                sprechen für sich.
              </p>
              <p className="mb-5 text-gray-400">
                Mit unserem bewährten System und deiner Motivation steht auch
                deiner Transformation nichts im Weg.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative inline-block">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="group flex items-center gap-4"
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Jetzt Starten
                </ActionButton>
                <ArrowLongRightIcon className="h-6 w-6 text-primary-500 transition-transform group-hover:translate-x-2" />
              </motion.div>
              <div className="absolute -inset-2 -z-10 rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-lg opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

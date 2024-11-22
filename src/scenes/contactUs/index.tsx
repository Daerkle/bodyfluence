import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-black/20 px-5 py-3 placeholder-gray-500 backdrop-blur-sm text-white border border-gray-800 focus:border-primary-500 focus:outline-none`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id={SelectedPage.ContactUs} className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-white">
            KONTAKTIERE UNS
          </h2>
          <p className="my-5 text-gray-400">
            Bereit für den nächsten Schritt? Kontaktiere uns noch heute und starte
            deine persönliche Fitness-Reise. Wir freuen uns darauf, dich
            kennenzulernen und gemeinsam deine Ziele zu erreichen.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/your@email.com"
              method="POST"
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-lg bg-black/30 backdrop-blur-sm"></div>
              <div className="p-8">
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "Dieses Feld wird benötigt."}
                    {errors.name.type === "maxLength" &&
                      "Die maximale Länge beträgt 100 Zeichen."}
                  </p>
                )}

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" && "Dieses Feld wird benötigt."}
                    {errors.email.type === "pattern" && "Ungültige Email-Adresse."}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  placeholder="NACHRICHT"
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                      "Dieses Feld wird benötigt."}
                    {errors.message.type === "maxLength" &&
                      "Die maximale Länge beträgt 2000 Zeichen."}
                  </p>
                )}

                <button
                  type="submit"
                  className="group relative mt-5 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 px-20 py-3 transition duration-300 hover:from-primary-600 hover:to-secondary-600"
                >
                  <div className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100"></div>
                  <span className="text-white">ABSENDEN</span>
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
              <div className="absolute -inset-4 -z-10 rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

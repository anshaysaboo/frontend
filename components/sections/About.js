import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="py-14">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.75 }}
          >
            <div className="grid grid-cols-2">
              <div>
                <div className="max-w-[600px] prose">
                  <h1 className="font-bold text-black mb-8">About Me</h1>
                  <p>
                    I'm Anshay, a passionate developer and entrepreneur, and
                    student at the University of Southern California in Los
                    Angeles. I love tackling creative challenges and creating
                    products that have a tangible impact and improve lives of
                    others.
                  </p>
                  <p>
                    Since I wrote my first line of code in an after-school class
                    during elementary school, I've been fascinated by the power
                    programming grants us to create change.
                  </p>
                  <p>
                    I have experience with developing and releasing mobile apps
                    on the iOS and Android platforms. I've also developed
                    several full-stack web applications, extending my skillset
                    to API development, full-stack web app development, and
                    back-end development. I'm constantly looking for new
                    opportunities to explore new fields and push my boundaries.
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

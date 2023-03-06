import { motion } from "framer-motion";
import Link from "next/link";
import ProjectItem from "../ProjectItem";

export default function Projects({ projects = [], showViewAll = false }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="py-14">
          <div className="max-w-[600px] prose">
            <h1 className="font-bold text-black mb-8">
              {showViewAll ? "Featured Projects" : "Projects"}
            </h1>
          </div>
          <div className="flex flex-col gap-[100px]">
            {projects.map((project) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 0.75 }}
                key={project.title}
              >
                <ProjectItem project={project} key={project.title} />
              </motion.div>
            ))}
          </div>
          {showViewAll && (
            <div className="flex justify-center mt-20">
              <Link href="/projects">
                <button className="bg-black text-white px-4 py-2 rounded shadow font-bold text-lg">
                  View All Projects
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

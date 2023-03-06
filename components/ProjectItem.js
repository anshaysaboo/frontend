import { urlFor } from "@/client";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Tags from "./Tags";

export default function ProjectItem({ project }) {
  return (
    <div className="w-full grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 gap-10">
      <div>
        <div className="rounded-lg shadow-lg">
          <Image
            src={urlFor(project.image).url()}
            alt={project.title}
            width="1000"
            height="500"
            className="rounded-lg overflow-hidden"
          />
        </div>
      </div>
      <div className="sm:px-10">
        <p className="text-base tracking-wide">{project.type.toUpperCase()}</p>
        <Link href={`/projects/${project.slug.current}`}>
          <h1 className="font-bold text-3xl">{project.title}</h1>
        </Link>
        <p className="prose mt-3">{project.description}</p>
        <Tags items={project.technologies} />
      </div>
    </div>
  );
}

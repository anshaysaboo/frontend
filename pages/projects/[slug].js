import Layout from "@/components/Layout";
import Image from "next/image";
import client, { urlFor } from "../../client";

const Project = ({ project }) => {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12">
        <div className="rounded-lg shadow-lg mb-10">
          <Image
            src={urlFor(project.image).url()}
            alt={project.title}
            width="2000"
            height="1000"
            className="rounded-lg overflow-hidden w-full"
          />
        </div>

        <h1 className="text-5xl font-bold">{project.title}</h1>
        <h3 className="text-2xl font-bold opacity-50">{project.subtitle}</h3>
        <p className="prose"></p>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      project,
    },
  };
}

export default Project;

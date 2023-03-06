import client from "@/client";
import Layout from "@/components/Layout";
import Projects from "@/components/sections/Projects";

export default function ProjectsPage({ projects = [] }) {
  return (
    <Layout>
      <Projects projects={projects} />
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(`
      *[_type == "project"]
    `);
  return {
    props: {
      projects,
    },
  };
}

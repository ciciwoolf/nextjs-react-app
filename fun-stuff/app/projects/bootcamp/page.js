import Link from "next/link";

export default function ProjectPage({ params }) {
  return (
    <main>
      <h1> Bootcamp Project </h1>
      <p>
        <Link href="https://github.com/ciciwoolf/proyecto_ciciwoolf_digitalhouse">
          Digitalhouse Bootcamp Project
        </Link>
      </p>
      <p>
        <Link href="/projects">Back to Projects</Link>
      </p>
    </main>
  );
}

import Link from "next/link";

export default function ProjectPage({ params }) {
  return (
    <main>
      <h1> Bootcamp Project </h1>
      <p>
        <Link href="/projects">Back to Projects</Link>
      </p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}

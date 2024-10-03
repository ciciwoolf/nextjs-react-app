import Link from "next/link";

export default function ProjectPage({ params }) {
  return (
    <main>
      <p>
        <Link href="https://github.com/ciciwoolf/javascript-art">
          Javascript Art
        </Link>
      </p>
      <p>
        <Link href="/projects">Back to Projects</Link>
      </p>
    </main>
  );
}

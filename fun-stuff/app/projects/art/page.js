import Link from "next/link";

export default function ProjectPage({ params }) {
  return (
    <main>
      <h1>Art</h1>
      <p>
        <Link href="https://github.com/ciciwoolf/javascript-art">
          Check out my repo for my JavaScript art
        </Link>
      </p>
      <p>
        <Link href="/projects">Back to Projects</Link>
      </p>
    </main>
  );
}

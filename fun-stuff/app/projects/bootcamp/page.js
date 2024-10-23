import Link from "next/link";

export default function ProjectPage({ params }) {
  return (
    <main>
      <h1> Bootcamp Project </h1>
      <iframe
        width="450"
        height="450"
        src="https://embed.figma.com/design/aLlIsyRhgVZjoAcOcs8K86/Cici's-Chocolates?node-id=0-1&embed-host=share"
        allowfullscreen
      ></iframe>
      <p>
        <Link href="https://github.com/ciciwoolf/proyecto_ciciwoolf_digitalhouse">
          Check out my Digitalhouse Bootcamp Project repo
        </Link>
      </p>
      <p>
        <Link href="/projects">Back to Projects</Link>
      </p>
    </main>
  );
}

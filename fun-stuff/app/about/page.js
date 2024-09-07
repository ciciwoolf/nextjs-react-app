import Link from "next/link";
import Header from "../components/header";

export default function AboutPage() {
  return (
    <main>
      <Header />

      <p>I'm building a site using Nextjs :-D</p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}

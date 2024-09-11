import Header from "./components/header";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <Link href="/about">About Me</Link>
      </p>
      <p>
        <Link href="/">Contact</Link>
      </p>
    </main>
  );
}

import Link from "next/link";
import logoImg from "@assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="Logo" />
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

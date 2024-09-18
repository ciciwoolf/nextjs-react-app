import Link from "next/link";
import logoImg from "@assets/logo.png";
import classes from "./main-header.module.scss";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Logo" width={100} height={100} />
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

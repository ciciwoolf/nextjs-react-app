import Link from "next/link";
import logoImg from "@assets/logo.png";
import classes from "./main-header.module.scss";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
];

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Logo" width={100} height={100} />
      </Link>
      <nav className={classes.nav}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import Link from "next/link";
import logoImg from "@assets/logo.png";
import styles from "./main-header.module.scss";
import Image from "next/image";
import NavLink from "./nav-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg} alt="Logo" width={100} height={100} />
      </Link>
      <nav className={styles.nav}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

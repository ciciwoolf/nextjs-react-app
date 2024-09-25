"use client";
import Link from "next/link";
import styles from "./nav-link.module.scss";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? styles.active : undefined}>
      {children}
    </Link>
  );
}

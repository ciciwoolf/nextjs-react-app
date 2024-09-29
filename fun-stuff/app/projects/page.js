import Link from "next/link";
import styles from "./page.module.scss";

const projectLinks = [
  { href: "/digitalhouse", label: "Digitalhouse" },
  { href: "/art", label: "Art" },
];

export default function ProjectPage() {
  return (
    <main>
      <h1>Updates Coming Soon</h1>
      <div className={styles.links}>
        <ul className={styles.ul}>
          {projectLinks.map((project, index) => (
            <li className={styles.li} key={index}>
              <Link href={project.href} className={styles.projectLink}>
                {project.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

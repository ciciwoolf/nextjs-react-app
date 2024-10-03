import Link from "next/link";
import styles from "./page.module.scss";

const projectLinks = [
  { href: "/projects/bootcamp", label: "Digitalhouse" },
  { href: "/projects/art", label: "Art" },
];

export default function ProjectPage() {
  const num = 5;
  return (
    <main>
      <h1 className={styles.animate}>Updates Coming Soon</h1>
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
      <div className={styles.lines}>
        {[...Array(num)].map((_, index) => (
          <div key={index} className={styles.line}></div>
        ))}
      </div>
    </main>
  );
}

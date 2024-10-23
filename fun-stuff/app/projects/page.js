import Link from "next/link";
import styles from "./page.module.scss";
import FallingStars from "@components/falling-stars";

const projectLinks = [
  { href: "/projects/bootcamp", label: "Digitalhouse" },
  { href: "/projects/art", label: "Art" },
];

export default function ProjectPage() {
  return (
    <main>
      <div className={styles.links}>
        <ul className={styles.ul}>
          {projectLinks.map((project, index) => (
            <li className={styles.link} key={index}>
              <Link href={project.href} className={styles.projectLink}>
                {project.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <FallingStars />
    </main>
  );
}

import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar({
  selectedPage,
}: {
  selectedPage: "home" | "posts";
}): JSX.Element {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.linktext}>
          <Link
            href="/"
            className={selectedPage === "home" ? styles.selected : ""}
          >
            HOME
          </Link>
        </div>
        <div className={styles.linktext}>
          <Link
            href="/posts"
            className={selectedPage === "posts" ? styles.selected : ""}
          >
            POSTS
          </Link>
        </div>
      </div>
    </>
  );
}

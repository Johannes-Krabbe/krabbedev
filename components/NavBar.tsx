import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <h1 className={styles.name}>krabbe.dev</h1>
      </Link>
      <div className={styles.links}>
        <div className={styles.linktext}>
          <Link href="/posts">POSTS</Link>
        </div>
        <div className={styles.linktext}>
          <Link href="/about">ABOUT</Link>
        </div>
        <div className={styles.linktext}>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}

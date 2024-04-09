import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar(): JSX.Element {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <div className={styles.linktext}>
            <Link href="/">HOME</Link>
          </div>
          <div className={styles.linktext}>
            <Link href="/posts">POSTS</Link>
          </div>
          <div className={styles.linktext}>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </>
  );
}

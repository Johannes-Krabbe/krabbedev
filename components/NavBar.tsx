import Link from "next/link";
import Hamburger from "hamburger-react";
import styles from "./NavBar.module.scss";
import { useState } from "react";
import Modal from "react-modal";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.mobile}>
        <Link href="/">
          <h1 className={styles.name}>krabbe.dev</h1>
        </Link>
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <Modal
        className={styles.modal}
        style={{
          overlay: {
            background: "#ffffffdd",
            marginTop: 65,
          },
        }}
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
      >
        <div className={styles.links}>
          <div className={styles.linktext}>
            <Link onClick={() => setOpen(false)} href="/">
              HOME
            </Link>
          </div>
          <div className={styles.linktext}>
            <Link onClick={() => setOpen(false)} href="/posts">
              POSTS
            </Link>
          </div>
          <div className={styles.linktext}>
            <Link onClick={() => setOpen(false)} href="/about">
              ABOUT
            </Link>
          </div>
          <div className={styles.linktext}>
            <Link onClick={() => setOpen(false)} href="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </Modal>

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
    </>
  );
}

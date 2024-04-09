import path from "path";
import fs from "fs";

import { GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "./home.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function Home({ mdxSource }: Props) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.image}>
            <Image
              src="/profilePicture.png"
              alt="profilePicture"
              width={250}
              height={250}
              className={styles.nextImage}
            />
          </div>

          <div className={styles.text}>
            <h1>Johannes Krabbe</h1>
            <MDXRemote {...mdxSource} />
            <div className={styles.socials}>
              <Link href={"https://github.com/johannes-krabbe"}>
                <Image
                  className={styles.nextImage}
                  src="/githubLogo.svg"
                  alt="github"
                  width={50}
                  height={50}
                />
              </Link>

              <Link href={"https://www.linkedin.com/in/johannes-krabbe"}>
                <Image
                  className={styles.nextImage}
                  src="/linkedinLogo.svg"
                  alt="linkedin"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async () => {
  const folderPath = path.join(process.cwd(), "content");
  const filePath = path.join(folderPath, `index.mdx`);
  const source = fs.readFileSync(filePath);

  const mdxSource = await serialize(source.toString());
  return { props: { mdxSource } };
};

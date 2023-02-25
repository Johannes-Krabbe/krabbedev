import path from "path";
import fs from "fs";

import { GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "./subpages.module.scss";
// import ExampleComponent from './example'

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function About({ mdxSource }: Props) {
  return (
    <div className={styles.main}>
      <h1>About</h1>
      <div className={styles.content}>
        <MDXRemote {...mdxSource} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async () => {
  const folderPath = path.join(process.cwd(), "content");
  const filePath = path.join(folderPath, `about.mdx`);
  const source = fs.readFileSync(filePath);

  const mdxSource = await serialize(source.toString());
  return { props: { mdxSource } };
};

import { GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getSlugs } from "@/utils/getSlugs";
import { ParsedUrlQuery } from "querystring";
import { getPostFromSlug } from "@/utils/getPost";
import styles from "./slug.module.scss";

interface Props {
  post: {
    mdxSource: MDXRemoteSerializeResult;
    frontmatter: any;
  };
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function post({ post }: Props) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <div className={styles.metadata}>{post.frontmatter.publishedAt}</div>
      <div className={styles.content}>
        <MDXRemote {...post.mdxSource} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { slug } = context.params as IParams;

  const post = await getPostFromSlug(slug);
  if (!post) return { notFound: true };

  const mdxSource = await serialize(post.content);
  return {
    props: {
      post: { mdxSource, frontmatter: post.frontmatter },
    },
  };
};

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlugs()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

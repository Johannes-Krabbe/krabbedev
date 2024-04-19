import React from "react";
import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";

import { getAllPosts } from "@/utils/getPost";

import styles from "./posts.module.scss";
import NavBar from "@/components/NavBar";

interface Props {
  posts: any[];
}

export default function PostsPage({ posts }: Props) {
  return (
    <>
      <NavBar selectedPage="posts" />
      <React.Fragment>
        <Head>
          <title>My Blog</title>
        </Head>
        <div className={styles.postList}>
          {posts.map((frontMatter) => {
            return (
              <div key={frontMatter.slug} className={styles.item}>
                <Link href={`/posts/${frontMatter.slug}`} passHref>
                  <div>
                    <h1 className="title">{frontMatter.title}</h1>
                    <p className="summary">{frontMatter.excerpt}</p>
                    <p className="date">
                      {dayjs(frontMatter.publishedAt).format("MMMM D, YYYY")}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  posts.sort((a, b) => {
    if (dayjs(a.publishedAt).isBefore(dayjs(b.publishedAt))) {
      return 1;
    } else if (dayjs(b.publishedAt).isBefore(dayjs(a.publishedAt))) {
      return -1;
    }
    return 0;
  });

  return {
    props: {
      posts,
    },
  };
}

import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "content/posts/");

export async function getPostFromSlug(slug: string) {
  const articleDir = path.join(postsPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir);
  const { content, data } = matter(source);

  if (data.published !== "true") {
    return;
  }

  return {
    content,
    frontmatter: {
      slug,
      title: data.title,
      publishedAt: data.publishedAt,

      ...data,
    },
  };
}

export async function getAllPosts() {
  const articles = fs.readdirSync(postsPath);

  return articles.reduce((allArticles: any[], articleSlug: string) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(postsPath + articleSlug, "utf-8");
    const { data } = matter(source);
    if (data.published !== "true") {
      return allArticles;
    }

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
      },
      ...allArticles,
    ];
  }, []);
}

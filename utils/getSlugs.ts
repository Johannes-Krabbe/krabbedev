import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { sync } from "glob";

const articlesPath = path.join(process.cwd(), "content/posts");

export async function getSlugs(): Promise<string[]> {
  const paths = sync(`${articlesPath}/*.mdx`);

  const slugs: string[] = paths
    .filter((path) => {
      // holds the paths to the directory of the article
      const source = fs.readFileSync(path, "utf-8");
      const { data } = matter(source);
      if (data.published !== "true") {
        return false;
      }

      return true;
    })
    .map((path) => {
      // holds the paths to the directory of the article
      const pathContent = path.split("/");
      const fileName = pathContent[pathContent.length - 1];
      const [slug, _extension] = fileName.split(".");

      return slug;
    });

  return slugs;
}

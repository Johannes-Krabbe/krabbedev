import path from "path";
import { sync } from "glob";

const articlesPath = path.join(process.cwd(), "content/posts");

export async function getSlugs(): Promise<string[]> {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

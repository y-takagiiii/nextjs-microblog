import path from "path";
import fs from "fs";
import matter from "matter"

const postsDirectory = path.join(process.cwd(), "posts")

//mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, ""); // ファイル名(id)
    // .mdファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    // .mdファイルのメタデータを取得
    const matterResult = matter(fileContents);
    // idとデータを返す
    return {
      id,
      ...matterResult,
    };
  });
}
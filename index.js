import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { genREADME } from "./lib/main.js";
import { genRepList, genTodoList } from "./lib/utils/list.js";
import { genLine } from "./lib/utils/line.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = process.env();

genREADME(process.argv[2]);

// 生成 README 文件内容
export function genREADME(token) {
  // 复制模版内容到 README
  fs.copyFileSync(path.join(root, "lib/template/md/index.md"), path.join(root, "README.md"));

  // 把 github-status 内容追加到 README
  const githubStatusContent = fs.readFileSync(path.join(root, "lib/template/md/github-info.md"), "utf-8");
  appendToReadme(githubStatusContent);

  fs.appendFileSync("./README.md", githubStatusContent);

  // genRepList();
  // genLine();
  // genTodoList();
}

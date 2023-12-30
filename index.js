import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { genList } from "./lib/utils/list.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = process.cwd();

genREADME(process.argv[2]);

// 生成 README 文件内容
function genREADME(token) {
  // 复制模版内容到 README
  fs.copyFileSync(path.join(root, "template/md/index.md"), path.join(root, "README.md"));

  // 把 github-status 内容追加到 README
  const githubInfo = fs.readFileSync(path.join(root, "template/md/github-info.md"), "utf-8");

  fs.appendFileSync("./README.md", githubInfo);

  // genList();
}

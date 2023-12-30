// [![NPM downloads](https://img.shields.io/npm/dm/veact?style=flat&label=&color=cb3837&labelColor=cb0000&logo=npm)](https://www.npmjs.com/package/veact)
export function genList(username) {
  let content = `\n\n##### Some repo: \n`;

  toolList.forEach((item) => {
    content += `- [${item.name}](https://github.com/wangrongding/${item.name})：${item.description}  [![](https://img.shields.io/github/stars/wangrongding/${item.name})](https://github.com/wangrongding/${item.name})     [![](https://img.shields.io/npm/dt/${item.name}?style=flat&label=downloads&color=cb3837&labelColor=cb0000&logo=npm)](https://www.npmjs.com/package/${item.name})\n`;
  });

  repoList.forEach((item) => {
    content += `- [${item.name}](https://github.com/wangrongding/${item.name})：${item.description}  [![](https://img.shields.io/github/stars/wangrongding/${item.name})](https://github.com/wangrongding/${item.name}) \n`;
  });

  content += `- [fanyi](https://github.com/wangrongding/fanyi)：VS Code 划词翻译插件  [![](https://img.shields.io/github/stars/wangrongding/fanyi)](https://github.com/wangrongding/fanyi)     [![](https://badgen.net/vs-marketplace/i/wangrongding.fanyi)](https://marketplace.visualstudio.com/items?itemName=wangrongding.fanyi)\n`;

  return content;
}

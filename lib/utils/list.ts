export const repoList = [
  {
    name: "github-university",
    description: "📚 汇总 github 中优质的学习资源，好用的工具，有趣的项目...",
  },
  {
    name: "access-counter",
    description:
      "🍀 超级简单好用的 github profile 访问计数器。 使用 Vercel KV for Redis 记录浏览量。",
  },
  // {
  //   name: "node-park",
  //   description: "🚙 一个有趣的 nodejs 技术栈的案例集合~",
  // },
  // {
  //   name: "fedtop",
  //   description: "🚕 专注分享前端技术, 包括前端框架, 工具, 工程化, 趋势...",
  // },
  // {
  //   name: "frontend-park",
  //   description:
  //     "🌸 一个有趣的前端趣味知识公园~该项目是我平时捣鼓前端相关技术的一些案例集合。",
  // },
  // {
  //   name: "desktop-renderer",
  //   description: "🏞️ 一个桌面壁纸客户端，支持动态壁纸",
  // },
  // {
  //   name: "super-extensions",
  //   description: "🤖 一个专属于开发者的超级无敌浏览器扩展插件💪",
  // },
  // {
  //   name: "vue-super",
  //   description: "🚗 一个开袋即食的 vue3 精简项目模板。",
  // },
  // {
  //   name: "vue-super-admin",
  //   description: "🚗 一个适用于个人 ，团队协同开发的 vue3.2👆 精简管理后台模板。",
  // },
]

const toolList = [
  {
    name: "dev-boy",
    description: "🛠️An awesome terminal cli toolkit.(小而美的 cli 工具包)🧰",
  },
  {
    name: "ding-trans",
    description: "🌈一个在终端上翻译的工具，支持有道翻译和 DeepL 翻译。",
  },
  {
    name: "prm-cli",
    description: "🦄快速切换包管理工具的镜像源",
  },
  {
    name: "dev-search",
    description: "🌸在命令行中快速搜索你想要的！",
  },
  {
    name: "pm-limiter",
    description: "🥳node 包管理器的约束工具，用于协同项目的统一规范。",
  },
  {
    name: "folder-print",
    description: "🌿一个用于打印当前目录树形结构的终端命令行工具。",
  },
]

// [![NPM downloads](https://img.shields.io/npm/dm/veact?style=flat&label=&color=cb3837&labelColor=cb0000&logo=npm)](https://www.npmjs.com/package/veact)
export function genList(username) {
  let content = `\n\n##### Some repo: \n`

  toolList.forEach((item) => {
    content += `- [${item.name}](https://github.com/wangrongding/${item.name})：${item.description}  [![](https://img.shields.io/github/stars/wangrongding/${item.name})](https://github.com/wangrongding/${item.name})     [![](https://img.shields.io/npm/dt/${item.name}?style=flat&label=downloads&color=cb3837&labelColor=cb0000&logo=npm)](https://www.npmjs.com/package/${item.name})\n`
  })

  repoList.forEach((item) => {
    content += `- [${item.name}](https://github.com/wangrongding/${item.name})：${item.description}  [![](https://img.shields.io/github/stars/wangrongding/${item.name})](https://github.com/wangrongding/${item.name}) \n`
  })

  content += `- [fanyi](https://github.com/wangrongding/fanyi)：VS Code 划词翻译插件  [![](https://img.shields.io/github/stars/wangrongding/fanyi)](https://github.com/wangrongding/fanyi)     [![](https://badgen.net/vs-marketplace/i/wangrongding.fanyi)](https://marketplace.visualstudio.com/items?itemName=wangrongding.fanyi)\n`

  return content
}

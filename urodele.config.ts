export const config = {
  github: {
    login: "TiaraYlQ", // github login name, not user name
    repo: "TiaraYlQ.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Lunic Y",
    brand: "North-Star-Y",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© TiaraYlQ",
    copyrightUrl: "https://github.com/TiaraYlQ",
  },
  pagination: {
    size: 10,
  },
  giscus: {
   repo: "TiaraYlQ/TiaraYlQ.github.io",          // 你的仓库名
   repoId: "R_kgDOTAzqPg",                       // 从giscus官网获取
   category: "Announcements",                    // 你选的分类
   categoryId: "DIC_kwDOTAzqPs4C_mbn",           // 从giscus官网获取
   mapping: "pathname",                          // 推荐用pathname
   strict: "0",                                  // 可选，一般填0
   reactionsEnabled: "1",                        // 开启表情反应，1开启，0关闭
   emitMetadata: "0",                            // 可选，一般填0
   inputPosition: "bottom",                      // 评论框位置：top或bottom
   theme: "preferred_color_scheme",              // 主题，随系统暗色/亮色切换
   lang: "zh-CN",                                // 语言
 },
} as const; 

export default config;

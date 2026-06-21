export const config = {
  github: {
    login: "TiaraYlQ", // github login name, not user name
    repo: "TiaraYlQ.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "NorthStar Y Lunic",
    brand: "NorthStarY",
    description: "A self-owned full-static blog system",
  },
  footer: {
    copyright: "© TiaraYlQ",
    copyrightUrl: "https://github.com/TiaraYlQ",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;

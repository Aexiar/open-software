import { DefaultTheme } from 'vitepress'
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: '推荐软件',
      link: `/notes/01_recommend/`
    },
    {
      text: 'Java学科',
      link: `/notes/02_java/`
    },
    {
      text: '前端学科',
      link: `/notes/03_web-design/`
    }
  ],
}

export default sidebar
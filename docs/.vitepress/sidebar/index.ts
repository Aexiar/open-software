import { DefaultTheme } from 'vitepress'
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: '推荐软件',
      link: `/notes/00_rec/`
    },
    {
      text: 'C/C++学科',
      link: `/notes/01_c/`
    },
    {
      text: '前端学科',
      link: `/notes/02_web-design/`
    },
    {
      text: 'Java学科',
      link: `/notes/03_java/`
    },
    
  ],
}

export default sidebar
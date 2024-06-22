import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'
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
    },
    {
      text: '其它',
      collapsed: true,
      items: [
        { text: '初识 C 语言', link: `/notes/01_c/01_${commonDirectoryName}/` },
      ]
    },
  ],
}

export default sidebar
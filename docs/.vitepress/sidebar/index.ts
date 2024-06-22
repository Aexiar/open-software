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
      collapsed: true,
      items: [
        { text: '初识 C 语言', link: `/notes/01_c/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: '数据结构和算法',
      collapsed: true,
      items: [
        { text: '初识 C 语言', link: `/notes/01_c/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: '计算机网络',
      collapsed: true,
      items: [
        { text: '初识 C 语言', link: `/notes/01_c/01_${commonDirectoryName}/` },
      ]
    },
  ],
}

export default sidebar
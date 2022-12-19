import MarkdownIt from 'markdown-it'

const mdOptions: any = {
  injected: true,
  breaks: true,
  html: true,
  linkify: false,
  typography: true,
}
const md = new MarkdownIt(mdOptions)
import { markdownBody } from '@/styles/github-markdown'

export const Markdown = ({ children }: { children: string }) => {
  return (
    <div
      css={markdownBody}
      dangerouslySetInnerHTML={{ __html: md.render(children) }}
    ></div>
  )
}

import MarkdownIt from 'markdown-it'

const mdOptions: any = {
  injected: true,
  breaks: true,
  html: true,
  linkify: false,
  typography: true,
}
const md = new MarkdownIt(mdOptions)

export const Markdown = ({ children }: { children: string }) => {
  return (
    <div
      className='markdown-body'
      dangerouslySetInnerHTML={{ __html: md.render(children) }}
    ></div>
  )
}

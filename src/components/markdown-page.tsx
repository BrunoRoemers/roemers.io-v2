import { MDXProvider } from '@mdx-js/react'
import * as React from 'react'
import CodeBlock from './code-block'
import Container from './container'
import Link from './link'
import Theme from './theme'

const h1 = ({children}) => <h1 className='text-6xl font-heading'>{children}</h1>

const h2 = ({children}) => <h2 className='text-4xl font-heading'>{children}</h2>

const h3 = ({children}) => <h3 className='text-2xl font-heading'>{children}</h3>

const a = ({children, href}) => <Link to={href}>{children}</Link>

const p = ({children}) => <p>{children}</p>

const strong = ({children}) => <strong className='font-black'>{children}</strong>

const blockquote = ({children}) => <blockquote className="border-b-2 border-blue-600 before:content-['\201c'] before:text-blue-600 before:text-6xl relative before:absolute before:-left-1 before:-top-2 pl-6">{children}</blockquote>

const code = ({children, className}) => <CodeBlock language={className.replace('language-', '')}>{children.trim()}</CodeBlock>

interface Props {
  children?: React.ReactNode,
}

// example see https://github.com/gatsbyjs/gatsby-starter-mdx-basic/blob/master/src/components/layout.js
const MarkdownPage = ({ children }: Props) => {
  return (
    <Theme>
      <Container>
        <article className='mt-20'>
          {/* docs, see: https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/ */}
          <MDXProvider components={{h1, h2, h3, a, p, strong, blockquote, code}}>
            {children}
          </MDXProvider>
        </article>
      </Container>
    </Theme>
  )
}

export default MarkdownPage

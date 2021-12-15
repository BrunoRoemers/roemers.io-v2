import * as React from 'react'
import Container from './container'
import Theme from './theme'

interface Props {
  children?: React.ReactNode,
}

// example see https://github.com/gatsbyjs/gatsby-starter-mdx-basic/blob/master/src/components/layout.js
const MarkdownPage = ({ children }: Props) => {
  return (
    <Theme>
      <Container>
        {/* TODO give styles to markdown elements */}
        {children}
      </Container>
    </Theme>
  )
}

export default MarkdownPage

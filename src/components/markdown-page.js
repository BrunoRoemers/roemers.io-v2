import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'

// example see https://github.com/gatsbyjs/gatsby-starter-mdx-basic/blob/master/src/components/layout.js
const MarkdownPage = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default MarkdownPage

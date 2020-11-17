import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PlatformTemplate = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data
  return (
    <Layout>
      <SEO title={`Platforms | ${frontmatter.title}`} />
      <h1>{frontmatter.title}</h1>
      <h2>
        <a href={frontmatter.spreadsheet} target="_blank" rel="noopener noreferrer">
          View Spreadsheet
        </a>
      </h2>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query PlatformQuery($platformId: String!) {
    markdownRemark(id: { eq: $platformId }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        title
        spreadsheet
      }
    }
  }
`

export default PlatformTemplate

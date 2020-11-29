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
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <iframe
        title={`${frontmatter.title} Data`}
        width="100%"
        height="500"
        src={frontmatter.spreadsheet ? frontmatter.spreadsheet : ''}
      ></iframe>
    </Layout>
  )
}

export const query = graphql`
  query PlatformQuery($platformId: String!) {
    markdownRemark(id: { eq: $platformId }) {
      id
      html
      frontmatter {
        title
        spreadsheet
      }
    }
  }
`

export default PlatformTemplate

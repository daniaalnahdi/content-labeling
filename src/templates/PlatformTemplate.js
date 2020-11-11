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
    </Layout>
  )
}

export const query = graphql`
  query PlatformQuery($platformSlug: String!) {
    markdownRemark(fields: { slug: { eq: $platformSlug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
      }
    }
  }
`

export default PlatformTemplate

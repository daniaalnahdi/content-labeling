import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PlatformsPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <Layout>
      <SEO title="Platforms" />
      <h1>List of Platforms</h1>
      <ul>
        {edges.map(({ node }, index) => (
          <li key={index}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query PlatformsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(platforms)/" } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

export default PlatformsPage

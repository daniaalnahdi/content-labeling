const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const platformTemplate = path.resolve("src/templates/PlatformTemplate.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: platformTemplate,
        context: { platformId: node.id },
      })
    })
  })
}

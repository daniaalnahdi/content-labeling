import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "../components/image"

const Header = ({ siteTitle }) => {
  return (
    <StaticQuery
      query={graphql`
        query MainPagesQuery {
          allFile(
            filter: {
              absolutePath: { regex: "/(pages)/" }
              relativeDirectory: { ne: "" }
            }
          ) {
            edges {
              node {
                relativeDirectory
              }
            }
          }
        }
      `}
      render={({ allFile }) => (
        <header
          style={{
            background: `maroon`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </h1>
            <ul
              style={{
                margin: `0`,
                padding: `0`,
                marginTop: `1em`,
                listStyleType: `none`,
              }}
            >
              {allFile.edges.map(({ node }, index) => (
                <li key={index}>
                  <Link
                    to={`/${node.relativeDirectory}`}
                    style={{ color: `white`, textTransform: `capitalize` }}
                  >
                    {node.relativeDirectory}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
      )}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

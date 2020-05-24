import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            author
            title
            data
            description
            person {
              age
              name
            }
          }
        }
      }
    `}
    render={data => <><h2>Description</h2><p>{data.site.info.description}</p></>}
  ></StaticQuery>
)

export default ComponentName

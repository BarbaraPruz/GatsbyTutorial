import React from 'react'

import { graphql } from "gatsby"
import Layout from  "../components/layout";
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'

export const examples = (props) => {
    console.log("Examples Page",props)
    const { data:{site:{info:{author}}}} = props
    return (
        <Layout>
            <h1>Examples Page</h1>
            <Header />
            <HeaderStatic />
            <h4>Author {author}</h4>
        </Layout>
    )
}

// this value (data or whatever you call it) will show up in the page's props
export const data = graphql`
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
`
export default examples

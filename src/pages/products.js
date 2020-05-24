import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import styles from '../components/product.module.css'
import Image from 'gatsby-image'

const products= ({ data }) => {
  //note: products is alias for allContentfuleProduct.nodes
  const { allContentfulProduct:{nodes:products} } = data;
  console.log("products",products)
  return (
    <Layout>
      <section className={styles.page}>
        { products.map( product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>{product.title} <span>${product.price}</span></h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
            </article>           
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default products

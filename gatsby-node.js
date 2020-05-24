// create pages dynamically (ex. product detail pages)
// notes:
//      - must return a promise
//      - runs in "node land" so different syntax, etc.

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`query GetProducts {
        products:allContentfulProduct {
          nodes {
            slug
          }
        }
    }`)
    //console.log("create Page result",JSON.stringify(result));
    result.data.products.nodes.forEach( product => {
        createPage({
            path: `/products/${product.slug}`,
            component: path.resolve(`src/templates/product-template.js`),
            context: {
                slug:product.slug
            }
        })
    });
}
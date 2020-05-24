import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

// query + name is optional.  note name must be unique
const getData = graphql`
  query MyQuery {
    site{
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
`;
// const getData = graphql`
//   {
//     site{
//       info: siteMetadata {
//         author
//         title
//         data
//         description
//         person {
//           age
//           name
//         }
//       }
//     }
//   }
// `;
export const Header = () => {
  const data = useStaticQuery(getData);
  console.log('Header get data',data)
  const { site:{info:{title,person}} } = data;
  return (
    <div>
      <h1>title : {data.site.info.title}</h1>
      <h2>name : {data.site.info.person.name}</h2>
      <p>title: {title} and name is {person.name}</p>
    </div>
  )
}

export default Header;

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site(siteMetadata: {}) {
//         siteMetadata {
//           author
//           title
//           data
//           description
//           person {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   return <pre>{JSON.stringify(data, null, 4)}</pre>
// }

// export default ComponentName

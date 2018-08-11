import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  let dataArr = data.allMongodbTaxnewsbackendTopstories.edges
  console.log(dataArr)
  return (
    <div>
      <h1>Top stories</h1>
      <p>Success</p>
      <div>
        <table>
          <tbody>
            {dataArr.map(({ node }, index) => (
              <tr key={index}>
                <td>
                  <h2>{node.title}</h2>
                  <h4>{node.subTitle}</h4>
                  <a href={node.link} target="_blank">
                    For more information
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

//export default topStories
export const topStoriesQuery = graphql`
  query topStoriesResult {
    allMongodbTaxnewsbackendTopstories {
      edges {
        node {
          title
          subTitle
          link
        }
      }
    }
  }
`

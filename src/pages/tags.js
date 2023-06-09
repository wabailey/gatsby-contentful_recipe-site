import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";


const tags = ({ data }) => {

	const newTags = setupTags(data.allContentfulRecipe.nodes)

	return (
		<Layout>
			<main className="page">
				<section className="tags-page">
					{newTags.map((tag, index) => {
						const [text, value] = tag

						return (
							<Link key={index} to={`/tags/${text}`} className="tag">
								<h5>{text}</h5>
								<p>{value} recipe</p>
							</Link>
						)
					})}
				</section>
			</main>
		</Layout>
	)
}

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default tags
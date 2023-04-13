import React from 'react'
import { graphql } from "gatsby";
import RecipeList from "../components/RecipeList";
import Layout from "../components/Layout";

export default function TagTemplate({ data, pageContext }) {

	console.log({ pageContext });

	const recipes = data.allContentfulRecipe.nodes;

	return (
		<Layout>
			<main className="page">
				<h2>{pageContext.tag}</h2>
				<div className="tag-recipes">
					<RecipeList recipes={recipes} />
				</div>
			</main>
		</Layout>
	)
}

export const query = graphql`
	query GetRecipeByTag($tag:String) {
		allContentfulRecipe(
			sort: {title: ASC}
			filter: {content: {tags: {eq: $tag}}}
		) {
			nodes {
				id
				title
				prepTime
				cookTime
				image {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
		}
	}
`
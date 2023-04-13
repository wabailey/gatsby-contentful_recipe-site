import React from 'react';
import TagList from "./TagList";
import RecipeList from "./RecipeList";
import { graphql, useStaticQuery } from "gatsby";

export default function AllRecipes() {

	const data = useStaticQuery(recipeData);

	const recipes = data.allContentfulRecipe.nodes;

	console.log(recipes);

	return (
		<section className="recipes-container">
			<TagList recipes={recipes} />
			<RecipeList recipes={recipes} />
		</section>
	)
}

const recipeData = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
    nodes {
      id
      title
      prepTime
      cookTime
      shortDescription
      content {
        tags
      }
      image {
        gatsbyImageData(placeholder: BLURRED)
      }
			description {
        description
      }
    }
  }
}
`
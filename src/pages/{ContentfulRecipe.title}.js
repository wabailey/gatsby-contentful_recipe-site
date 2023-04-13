import { graphql, Link } from "gatsby";
import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";

export default function RecipeTemplate({ data }) {
	const { title, cookTime, prepTime, servings, description: { description }, image } = data.contentfulRecipe;
	const { ingredients, instructions, tags, tools } = data.contentfulRecipe.content;
	const imgPath = getImage(image);

	console.log(data);

	return (
		<Layout>
			<main className="page">
				<div className="recipe-page">
					<section className="recipe-hero">
						<GatsbyImage image={imgPath} alt={title} className="about-img" />
						<article className="recipe-info">
							<h2>{title}</h2>
							<p>{description}</p>
							<div className="recipe-icons">
								<article>
									<BsClock />
									<h5>Prep Time</h5>
									<p>{prepTime} mins</p>
								</article>
								<article>
									<BsClockHistory />
									<h5>Cook Time</h5>
									<p>{cookTime} mins</p>
								</article>
								<article>
									<BsPeople />
									<h5>Serving size</h5>
									<p>{servings} people</p>
								</article>
							</div>
							<p className="recipe-tags">
								Tags : {tags.map((tag, index) => {
									return (
										<Link to={`/tags/${tag}`} key={index}>
											{tag}
										</Link>
									)
								})}
							</p>
						</article>
					</section>
					<section className="recipe-content">
						<article>
							<h4>Instruction</h4>
							{
								instructions.map((instruction, index) => {
									return (
										<div key={index} className="single-instruction">
											<header>
												<p>Step {index + 1}</p>
												<div></div>
											</header>
											<p>{instruction}</p>
										</div>
									)
								})
							}
						</article>
						<article className="second-column">
							<div>
								<h4>Ingredients</h4>
								{
									ingredients.map((ingredient, index) => {
										return (
											<p key={index} className="single-ingredient">{ingredient}</p>
										)
									})
								}
							</div>
							<div>
								<h4>Tools</h4>
								{
									tools.map((tool, index) => {
										return (
											<p key={index} className="single-tool">{tool}</p>
										)
									})
								}
							</div>
						</article>
					</section>
				</div>
			</main>
		</Layout>
	)
}

export const query = graphql`
query getRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
		cookTime
    servings
    prepTime
		description {
      description
    }
		image {
      gatsbyImageData(placeholder: BLURRED)
    }
    content {
      ingredients
      instructions
      tags
      tools
    }
  }
}`

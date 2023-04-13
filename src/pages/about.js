import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from 'gatsby';
import RecipeList from "../components/RecipeList";

const About = ({ data }) => {
	const recipes = data.allContentfulRecipe.nodes;

	return (
		<Layout>
			<main className='page'>
				<section className='about-page'>
					<article>
						<h2>Lorem ipsum dolor sit amet consectetur.</h2>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam dolorem natus laborum ratione assumenda suscipit nam quod laudantium odit!</p>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloribus.</p>
						<Link to='/contact' className='btn'>Contact</Link>
					</article>
					<StaticImage src="../assets/images/about.jpeg" alt='Person pouring salt in bowl' className='about-img' placeholder='blurred' />
				</section>
				<section className="featured-recipes">
					<h5>Look at this awesomesauce!</h5>
					<RecipeList recipes={recipes} />
				</section>
			</main>
		</Layout>
	)
}

export const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}, filter: {featuredRecipe: {eq: true}}) {
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

export default About
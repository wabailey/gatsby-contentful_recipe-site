import React from 'react';
import Layout from '../components/Layout';
import { graphql } from "gatsby";
import RecipeList from "../components/RecipeList";

const contact = ({ data }) => {
	const recipes = data.allContentfulRecipe.nodes;

	return (
		<Layout>
			<main className='page'>

				<section className='contact-page'>

					<article className='contact-info'>
						<h3>Want to get in touch?</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea dolorum iste aperiam doloremque repudiandae nesciunt atque ut nisi!</p>
						<p>Sed pariatur quidem, laudantium voluptatem quam est quod, modi nisi tempora dignissimos aliquam debitis quo!</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sint?</p>
					</article>

					<article>
						<form className="form contact-form">
							<div className='form-row'>
								<label htmlFor="name">Your name</label>
								<input type="text" name="name" id="name" />
							</div>
							<div className='form-row'>
								<label htmlFor="email">Your email</label>
								<input type="text" name="email" id="email" />
							</div>
							<div className="form-row">
								<label htmlFor="message">Your message</label>
								<textarea name="message" id="message"></textarea>
							</div>
							<button type='submit' className='btn block'>Submit</button>
						</form>
					</article>

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

export default contact
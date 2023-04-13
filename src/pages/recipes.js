import React from 'react';
import Layout from '../components/Layout';
import AllRecipes from "../components/AllRecipes";

const recipes = () => {
	return (
		<Layout>
			<h1>Recipes Page</h1>
			<AllRecipes></AllRecipes>
		</Layout>
	)
}

export default recipes
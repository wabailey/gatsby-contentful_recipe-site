import React from 'react';
import Layout from "../components/Layout";

const error = () => {
	return (
		<Layout>
			<main className='error-page'>
				<section>
					<h1>404</h1>
					<h3>Page Not Found 😮🤔😢</h3>
				</section>
			</main>
		</Layout>
	)
}

export default error
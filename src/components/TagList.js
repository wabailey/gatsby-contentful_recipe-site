import React from 'react';
import setupTags from "../utils/setupTags";
import { Link } from "gatsby";

export default function TagList({ recipes }) {
	const newTagArray = setupTags(recipes);
	console.log(newTagArray);
	return (
		<div className="tag-container">
			<h4>Recipes</h4>
			<div className="tags-list">
				{newTagArray.map((tag, index) => {
					const [text, value] = tag

					return (
						<Link key={index} to={`/tags/${text}`}>
							{text} ({value})
						</Link>
					)
				})}
			</div>
		</div>
	)
}

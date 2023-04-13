const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const query = await graphql(`
		query GetTags {
			allContentfulRecipe {
				nodes {
					content {
						tags
					}
				}
			}
		}
	`)

	query.data.allContentfulRecipe.nodes.forEach(recipe => {
		recipe.content.tags.forEach(tag => {
			createPage({
				path: `/tags/${tag}`,
				component: path.resolve(`src/templates/tag-template.js`),
				context: {
					tag: tag,
				},
			})
		})
	})
}
const setupTags = recipes => {
	const allTags = {};

	recipes.forEach(recipe => {
		recipe.content.tags.forEach(tag => {
			if (allTags[tag]) {
				allTags[tag] = allTags[tag] + 1
			} else {
				allTags[tag] = 1
			}
		})
	})

	const newTagArray = Object.entries(allTags).sort((a, b) => {
		const [firstTag] = a
		const [secondTag] = b
		return firstTag.localeCompare(secondTag)
	})

	return newTagArray
}

export default setupTags
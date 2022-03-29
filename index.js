fetch('https://api.github.com/graphql', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': 'bearer token',
	},
	body: JSON.stringify({
		query: `{
			search(type: USER, query: "location:bolivia", first: 10) {
				edges {
					node {
						... on User {
							id
							email
							avatarUrl
							location
							name
						}
					}
				}
			}
		}`
	})
})
	.then(r => r.json())
	.then(data => console.log('data returned:', data));
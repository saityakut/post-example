export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log('form ddata ::', data);

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: data.get('title'),
				body: data.get('body'),
				userId: 1
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	}
};

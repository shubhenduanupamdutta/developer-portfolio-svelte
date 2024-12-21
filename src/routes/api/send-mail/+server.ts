import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const data = await request.json();
	console.log(data);

	return json({ emailSendSuccessfully: true });
}

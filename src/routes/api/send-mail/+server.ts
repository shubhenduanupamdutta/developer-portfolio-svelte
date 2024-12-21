import { EMAIL, SENDGRID_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
	const { contactMail, contactName, infoAboutProject } = await request.json();

	if (!contactMail || !contactName || !infoAboutProject) {
		json({ message: 'Could not send email. Missing data.' }, { status: 400 });
	}

	const message = {
		to: EMAIL,
		from: EMAIL,
		subject: 'Contact Form on your Portfolio',
		html: `Somebody used the contact form on your site. <br />
        
        Name: ${contactName} <br />
        Email: ${contactMail} <br />
        Project Information: ${infoAboutProject}`
	};

	try {
		await sgMail.send(message);
		return json({ emailSendSuccessfully: true });
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}

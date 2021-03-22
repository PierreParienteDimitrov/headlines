import axios from 'axios';

function getRequestParams(email) {
	// Get env variables
	const API_KEY = process.env.MAILCHIMP_API_KEY;
	const LIST_ID = process.env.MAILCHIMP_LIST_ID;

	// mailchimp datacenter - mailchimp api keys always look like this:
	// 1d6g43y41a12d8n3fh7h23f5e436i0er-us6
	// we need to split the us6 part from the key
	const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1];

	const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

	// Add additional params here. See full list of available params:
	// https://mailchimp.com/developer/reference/lists/list-members/
	const data = {
		email_address: email,
		status: 'subscribed',
	};

	// API key needs to be encoded in base 64 format
	const base64ApiKey = Buffer.from(`anytstring:${API_KEY}`).toString('base64');
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Basic ${base64ApiKey}`,
	};

	return {
		url,
		data,
		headers,
	};
}

export default async (req, res) => {
	const { email } = req.body;

	if (!email || !email.length) {
		return res.status(400).json({ error: 'Please add your email' });
	}

	try {
		const { url, data, headers } = getRequestParams(email);

		const response = await axios.post(url, data, { headers });

		// Success
		return res.status(201).json({ error: null });
	} catch (error) {
		return res
			.status(400)
			.json({ error: 'Something went wrong...Please try again!' });
	}
};

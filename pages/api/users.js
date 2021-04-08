import { connectToDatabase } from '../../utils/mongodb';

export default async (req, res) => {
	const { db } = await connectToDatabase();

	const data = req.body;

	console.log(data);

	const response = await db.collection('users').insertOne(data);

	res.status(200).json(response);
};

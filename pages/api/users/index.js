import { dbConnect } from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const users = await User.find({});
				res.status(200).json({ sucess: true, data: users });
			} catch (err) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const user = await User.create(req.body);
				res.status(200).json({ sucess: true, data: users });
			} catch (err) {
				console.error(err.msg);
				res.status(400).json({ success: false });
			}
		default:
			res.status(400).json({ success: false });
	}
}

import { dbConnect } from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const users = await User.find({});
				return res.status(201).json({ sucess: true, data: users });
			} catch (err) {
				return res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				// console.log(req.body);
				const user = await User.create(req.body);
				return res.status(201).json({ success: true, data: user });
			} catch (err) {
				console.error(err.msg);
				return res.status(400).json({ success: false });
			}
		default:
			return res.status(400).json({ success: false });
	}
}

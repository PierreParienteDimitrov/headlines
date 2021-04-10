import { dbConnect } from '../../utils/dbConnect';
import User from '../../models/User';

export default async function (req, res) {
	await dbConnect();

	try {
		const user = await User.create(req.body);

		res.status(201).json({ success: true, data: user });
	} catch (err) {
		console.error(err.msg);
		res.status(400).json({ success: false });
	}
}

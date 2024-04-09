const Reg = require('../model/regModel.js');

exports.registration = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        const checkUsername = await Reg.findOne({ username: username });
        const checkEmail = await Reg.findOne({ email: email });

        if (checkUsername) {
            return res.status(400).json({ message: 'Username has already been taken' });
        }
        if (checkEmail) {
            return res.status(400).json({ message: 'Email has already been taken' });
        }

        const newUser = new Reg({
            name: name,
            username: username,
            email: email,
            password: password
        });

        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully',
            email: email
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const Details = require('../model/detailsModel');
const nodemailer = require('nodemailer');

exports.otherDetails = async (req, res) => {
    try {
        // Extract required data from the request body
        const { desc, location, email } = req.body;

        // Check if required fields are present
        if (!desc || !location || !email || !req.file) {
            return res.status(400).json({ success: false, msg: "Missing required fields" });
        }

        const { filename } = req.file;

        // Create a new record using the extracted data
        const record = new Details({
            img: filename,
            location,
            email,
            lookingFor: desc
        });

        // Save the record to the database
        await record.save();

        // Create a nodemailer transporter with SMTP configuration
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // set to true if using SSL/TLS
            auth: {
                user: 'santoshdaiya811@gmail.com',
                pass: 'adkhillhhnuwabur'
            }
        });

        // Send email using nodemailer
        await transporter.sendMail({
            from: 'santoshdaiya811@gmail.com',
            to: record.email,
            subject: "Verification Mail From Dribbble",
            text: "Please click the link below to verify your account....",
            html: "<h1>Thank You for registering, you are now eligible to use and post on Dribbble.</h1>"
        });

        // Send response as JSON
        res.status(200).json({ success: true, message: 'Details added successfully', img: filename });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

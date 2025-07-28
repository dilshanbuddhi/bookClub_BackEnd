import nodemailer from 'nodemailer';
import {NextFunction , Request ,Response} from "express";
import {Email} from "../models/Email";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dilshanbuddhi40@gmail.com',
        pass: 'sdtnymkvqitjcsku',
    },
});

const mailOptions = {
    from: 'dilshanbuddhi40@gmail.com',
    to: '',
    subject: '',
    text: '',
};
 export const sendEmail = async ( req: Request, res: Response , err: NextFunction) => {
    try {
        const reqMailOptions : Email = req.body
        mailOptions.subject = reqMailOptions.subject
        mailOptions.text = reqMailOptions.body
        mailOptions.to = reqMailOptions.to
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
 }


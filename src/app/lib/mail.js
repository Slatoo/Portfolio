"use server";
import nodemailer from 'nodemailer'

async function sendMail({ to, name, subject, body }) {
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        },

    })

    try {
        const testResult = await transport.verify()
        console.log(testResult);
    } catch (error) {
        console.log(error);
        return
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to,
            subject,
            html: body,
        })

    } catch (error) {
        console.log(error);
    }
}

export const sendButton = async (message, mail, subject) => {
    "use server"
    const { SMTP_EMAIL} = process.env;

    await sendMail({
        to: SMTP_EMAIL,
        name: "Jose",
        subject: "mensaje de portafolio!",
        body: `<div>
        <h1>
        FROM: ${mail}
        </h1>
        <br/>
        <h2>
        subject: ${subject}
        </h2>
        <br/>
        <p>
        ${message}
        </p>
        </div>`
    })
}
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 5000,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = (email: string, code: string): void => {
  const mailOption = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Código de verificación de tu cuenta",
    text: `Gracias por registrarte. Tu código de verificación es: ${code}`,
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log("Error enviando el correo");
    } else {
      console.log("Correo enviado", info.response);
    }
  });
};

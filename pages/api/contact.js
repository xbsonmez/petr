import nodemailer from 'nodemailer';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { name, email, phone } = req.body;
  debugger;
  console.log('name, email, message ,', name, email, phone );
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });



  try {
     const emailRes = await transporter.sendMail({
       from: 'petrahairtransplant.info@gmail.com',
       to: 'petrahairtransplant@gmail.com',
       subject: `Yeni Bir Danışan: ${name}`,
       html: `<p>Yeni Bir Danışanınız Var </p><br>
       <p><strong>Name: </strong> ${name} </p><br>
       <p><strong>Telefon: </strong> ${phone} </p><br>
       <p><strong>E-mail: </strong> ${email} </p><br>
       `,
     });

    console.log('Message Sent', emailRes);
  } catch (err) {
    console.log('HATA contact =>> !!! ',err);
  }

  res.status(200).json(req.body);
};
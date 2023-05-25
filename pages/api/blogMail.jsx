export default async function (req, res) {
    require("dotenv").config();
  
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "your mail",
        pass: "two step google token ",
      },
      secure: true,
      // requireTLS:false,
      // secureConnection: false,
      // tls: { ciphers: "SSLv3" },
    });
    
       const mailData = {
      from: "your mail",
      to: "reciver",
      subject: `Message From Happy Kid Dental`,
      //   text: req.body.message + " | Sent from: " + req.body.email,
      html: `
      <div><strong>Email:</strong> ${req.body.email}</div>
      `,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
    res.status(200).json({ status: "OK" });
  }
  
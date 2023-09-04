const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
require('dotenv').config();

const { MAILGUN_API_KEY } = process.env;

const sendEmail = data => {
  const mg = mailgun.client({
    username: 'anzheliika@meta.ua',
    key: MAILGUN_API_KEY,
  });

  mg.messages
    .create('sandbox8af8eeb26da3481589d0bbd9362a7db7.mailgun.org', {
      from: 'Mailgun Sandbox <anzheliika@meta.ua>',
      to: [data.to],
      subject: 'Verify your email',
      text: 'Verify your email',
      html: data.html,
    })
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
};

module.exports = sendEmail;

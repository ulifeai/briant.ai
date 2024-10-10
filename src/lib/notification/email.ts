import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendMail(address: string, introduction?: string, content?: string, id?: string) {
  let attachment: any = undefined
  const info = await resend.emails.send({
    from: '"Fairfares support" <' + process.env.MAIL_FROM_ADDRESS + '>',
    to: [address, "fairfares0@gmail.com"],
    subject: "Your ticket informations from Fairfares ✔",
    text: "Your ticket informations from Fairfares",
    html: content,
    attachments: attachment

  });
  console.log(info)
  return info;

}

import { currentUser, getAuth } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const user = await currentUser();

        const { data, error } = await resend.emails.send({
            from: 'Ulife.ai <contact@ulife.ai>',
            to: ['contact@ulife.ai'],
            subject: 'New feature notification request',
            text: `Future request notification from: ${user?.emailAddresses[0].emailAddress} `
            //   react: EmailTemplate({ email  }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
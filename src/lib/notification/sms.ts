import twillio from "twilio";

const accountSid = process.env.TWILLIO_ACCOUNT_SID ?? "";
const authToken = process.env.TWILLIO_AUTH_TOKEN ?? "";
const client = twillio(accountSid, authToken);

const phoneNumbers = process.env.PHONE_NUMBERS?.split(",")

export const SendSms = async (participants: any[], trip: any, locations: any[]) => {
    try {


        const message = await client.messages.create({
            body: "body",
            from: process.env.TWILLIO_FROM_NUMBER ?? '+16593335735',
            to: "number",
        });
        console.log(message);





    } catch (error) {
        // You can implement your fallback code here
        console.error(error);
    }
}

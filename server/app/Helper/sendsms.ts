import { error } from "console";

// Your AccountSID and Auth Token from console.twilio.com
const accountSid = process.env.twiloSid;
const authToken = process.env.twilo_authToken

const client = require('twilio')(accountSid, authToken);

const sendSms = ({ body, to }: { body: string, to: string }) => {
    client.messages
        .create({
            body: body,
            to: `+91${to}`, // Text your number
            from: `+918928772801`, // From a valid Twilio number
        })
        .then((message) =>
            console.log(message.sid)
        ).error((error) => {
            throw new Error()
        })


}

export default sendSms




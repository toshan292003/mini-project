require('dotenv').config();

const accountSID = process.env.TWILIO_ACCCOUNT_SID;
const auth = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSID,auth);

const sendSMS = async (body,recPhone)=>{
    let msgOptions = {
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.TO_NUMBER,
        body
    }
    try{
        const msg = await client.messages.create(msgOptions);
        console.log(msg);
    }
    catch(err){
        console.log(err);
    }
}

sendSMS("LAUDE Aman !")
require('dotenv').config();

const accountSID = process.env.TWILIO_ACCCOUNT_SID;
const auth = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSID,auth);
let msg = "helllo";
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

sendSMS("ALERT !! YOUR FRIEND TOSHAN MIGHTT BE IN REAL DANGER !!\n He is curretly in Sahyadri College of Engineering and Management.\nHere's his Coordinates : (12.866417, 74.925366)\n");
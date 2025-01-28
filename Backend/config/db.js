const mongoose = require('mongoose');
const dotenv = require('dotenv')


dotenv.config();


const connectDB = async () => {
    console.log("In connectDB");
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            tls: true,
            tlsAllowInvalidCertificates: true,
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};




module.exports =  connectDB;
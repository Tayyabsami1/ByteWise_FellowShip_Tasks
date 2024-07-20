import mongoose from "mongoose";
const connectionString = 'exampleConnection'

const ConnectDB = async () => {
    try {
        const connetion = await mongoose.connect(connectionString);
        console.log("DB Connection success");

    }
    catch (err) {
        throw new Error(err);
    }
}

export default ConnectDB;
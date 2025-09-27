import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('connected' , ()=>{  //when database connection is done 'connected'event will get executed 
        console.log("Database connected")       // and when 'connected'event gets executed arrow func will execute.
    })
    await mongoose.connect(`${process.env.MONGO_URI}/texel`);

}

export default connectDB;
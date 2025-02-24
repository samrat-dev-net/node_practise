import mongoose from "mongoose";

const uri = process.env.MONGO_URI
if (!uri) throw new Error('mongo uri missing')

export const dbConnect = () => {
    mongoose.connect(uri).then(() => {
        console.log('db connected')
    }).catch((err) => {
        console.log('db connection failed', err.message)
    })
}
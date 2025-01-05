import mongoose from "mongooose"

export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGDB_URI)
        console.log('Connected to DB:', conn.connection.host)
    } catch (error) {
        console.log('Error to connect to database', error)
    }
}


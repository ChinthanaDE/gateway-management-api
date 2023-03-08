import mongoose from 'mongoose';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'peripheral_db';

const dbConnection = async () => {
    try {
        await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to MongoDB');
    }
};

export default dbConnection;
